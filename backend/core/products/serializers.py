from rest_framework import serializers
from .models import *
from .session import BasketSession
from decimal import Decimal

class ProductSerializer(serializers.ModelSerializer):
    has_discount = serializers.SerializerMethodField()
    price_with_discount = serializers.SerializerMethodField()
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('title', 'description', 'price', 'discount',  'image_url', 'has_discount', 'price_with_discount', 'id', 'quantity' )


    def has_discount(self, obj):
        return obj.has_discount()
    
    def price_with_discount(self, obj): 
        return obj.price_with_discount()

    def get_image_url(self, obj):
        return f"http://localhost:8000{obj.image.url}"
    

class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ('name', 'id', 'image_url')

    def get_image_url(self, obj):
        return f"http://localhost:8000{obj.image.url}" if obj.image else ''
    


class BasketSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=True)
    title = serializers.CharField(required=True)
    price = serializers.FloatField(required=True)
    image_url = serializers.CharField(required=True)
    quantity = serializers.CharField(required=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.request = self.context.get('request')