from django.db import models
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class Category(models.Model):
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, null=True, blank=True, unique=True)
    image = models.ImageField(upload_to='category_images/', null=True)

    def save(self, *args, **kwargs):
        if slugify(self.name) != self.slug or not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Product(models.Model):

    # information fields
    title = models.CharField(max_length=250)
    description = models.TextField()
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)

    # transaction fields
    price = models.DecimalField(default=0, decimal_places=2, max_digits=20)
    discount = models.PositiveIntegerField(default=0)
    quantity = models.PositiveBigIntegerField(default=0)

    # relational fields
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    
    def __str__(self):
        return self.title
    
    def has_discount(self):
        return bool(self.discount)

    def price_with_discount(self):
        if self.discount:
            return float(self.price) - (float(self.price) * (self.discount / 100)) 
        return self.price
    

# order models
class UserInfo(models.Model):
    """Model for storing user payment information"""
    email = models.EmailField(max_length=255)
    card_number = models.CharField(max_length=16)
    card_expire_date = models.CharField(max_length=5)
    card_cvv = models.CharField(max_length=3)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "User Information"
        verbose_name_plural = "User Information"
    
    def __str__(self):
        return f"Payment info for {self.email}"
    


class Order(models.Model):
    user_info = models.ForeignKey(UserInfo, on_delete=models.PROTECT, related_name='orders', null=True)
    created_date = models.DateTimeField(auto_now=True)
    updated_date = models.DateTimeField(auto_now_add=True)

    def get_total_price(self):
        return sum((order.get_cost() for order in self.orders.all()))

    def __str__(self) -> str:
         return f"{self.user_info.email} - {self.created_date}"

class OrderItem(models.Model):
	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='orders', null=True)
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
	quantity = models.IntegerField(default=1)

	def __str__(self):
		return str(self.id)

	def get_cost(self):
		return self.product.price_with_discount() * self.quantity

	def __str__(self):
		return f"{self.product.title} - {self.quantity}"

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ['email', 'card_number', 'card_expire_date', 'card_cvv']