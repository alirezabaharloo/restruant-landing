from rest_framework import serializers
from .models import *
from .session import BasketSession
from decimal import Decimal
from .models import Basket


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
    


class BasketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Basket
        fields = ("id", 'title', 'price', 'image_url', 'item_count', 'quantity')

    def to_representation(self, instance):
        rep_data = super().to_representation(instance)
        rep_data['itemCount'] = rep_data.pop('item_count')
        return rep_data