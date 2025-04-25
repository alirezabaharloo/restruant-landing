from rest_framework import serializers
from .models import *
from .session import BasketSession


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

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ['email', 'card_number', 'card_expire_date', 'card_cvv']

    def create(self, validated_data):
        user_info = UserInfo.objects.filter(email=validated_data.get('email'))
        if user_info.exists():
            return user_info[0]
        return super().create(validated_data)