from typing import Iterable
from django.db import models
from django.utils.text import slugify


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
    

class Basket(models.Model):
    # information fields
    title = models.CharField(max_length=250)
    body = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=10)
    item_count = models.PositiveBigIntegerField(default=1)
    quantity = models.PositiveBigIntegerField(default=1)
    image_url = models.CharField(max_length=400, null=True)

    def save(self, *args, **kwargs) -> None:
        self.quantity = Product.objects.get(id=self.pk).quantity
        return super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    