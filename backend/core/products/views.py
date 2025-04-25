from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import Category
from rest_framework import viewsets
from rest_framework.decorators import action
from .session import BasketSession
from django.db import models

class ProductListView(GenericAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.exclude(quantity=0)
    
    def get(self, request):
        srz_data = self.get_serializer(self.get_queryset(), many=True)
        return Response(srz_data.data, status=status.HTTP_200_OK)


class OnsaleProductsView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.exclude(discount=0)[:3]


class ProductCategoryListView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class BasketViewSet(viewsets.ViewSet):
    """
    ViewSet for handling basket operations.
    Provides CRUD operations for basket items using session-based basket management.
    """

    def list(self, request):
        """
        Get all items in the user's basket from session
        """
        basket_session = BasketSession(request)
        basket_items = list(basket_session)
        return Response(basket_items, status=status.HTTP_200_OK)

    def create(self, request):
        """
        Add a product to the basket
        """
        missing_fields = []
        require_fields = ['id', 'quantity']
        for field in require_fields:
            if not request.data.get(field):
                missing_fields.append(field)
        if missing_fields:
            error_message = {field: f"this field is required!" for field in missing_fields}
            return Response(error_message, status=status.HTTP_400_BAD_REQUEST)
        
        basket_session = BasketSession(request)
        basket_product = basket_session.add_basket(request.data)
        print(basket_product)
        return Response(basket_product, status=status.HTTP_201_CREATED)

    def update(self, request, pk=None):
        """
        Update the quantity of a product in the basket
        """
        quantity = request.data.get('quantity')
        if not quantity:
            return Response({'error': 'Quantity is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Convert to proper types
            product_id = str(pk)
            quantity = int(quantity)
            
            basket_session = BasketSession(request)
            basket_session.update_quantity(product_id, quantity)
            return Response({'message': 'Quantity updated successfully'}, status=status.HTTP_200_OK)
        except KeyError:
            return Response({'error': 'Product not in basket'}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({'error': 'Invalid quantity'}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Remove a product from the basket
        """
        try:
            basket_session = BasketSession(request)
            basket_session.remove_basket(str(pk))
            return Response({'message': 'Product removed from basket'}, status=status.HTTP_200_OK)
        except KeyError:
            return Response({'error': 'Product not in basket'}, status=status.HTTP_404_NOT_FOUND)


class ClearBasket(APIView):
    """
    Clear all items from the basket
    """
    def delete(self, request):
        basket = BasketSession(request)
        basket.clear_basket()
        return Response({'message': 'basket cleared successfully!'}, status=status.HTTP_200_OK)
        

class OrderView(APIView):

    def post(self, request):
        order_obj = Order.objects.create()
        basket_data = request.session['basket']

        for key, value in basket_data.items():
            OrderItem.objects.create(
                product=Product.objects.get(id=key),
                order=order_obj,
                quantity=value['quantity']
            )

        # delete data in session
        del request.session['basket']
        request.session.save()

        return Response({"message": "checkout successfully!"}, status=status.HTTP_200_OK)

class OrderView(APIView):
    def post(self, request):
        # Step 1: Validate and create UserInfo
        user_info_data = {
            'email': request.data.get('email'),
            'card_number': request.data.get('card_number'),
            'card_expire_date': request.data.get('card_expire_date'),
            'card_cvv': request.data.get('card_cvv')
        }
        
        user_info_serializer = UserInfoSerializer(data=user_info_data)
        if not user_info_serializer.is_valid():
            return Response(
                user_info_serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create the UserInfo instance
        user_info = user_info_serializer.save()
        
        # Step 2: Check if basket exists
        basket_data = BasketSession(request)
        if len(basket_data) == 0:
            return Response(
                {"error": "basket is empty!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # step 3: create Order model
        order_obj = Order.objects.create(user_info=user_info)

        # step 4: create OrderItem models
        for basket_product in basket_data:
            OrderItem.objects.create(
                product=Product.objects.get(id=basket_product['id']),
                order=order_obj,
                quantity=basket_product['quantity'],
            ) 

        # step 5: clear basket
        basket_data.clear_basket()

        return Response(
            {"message": "checkout successfully!"},
            status=status.HTTP_200_OK
        )