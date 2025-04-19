from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import Category
from rest_framework import viewsets


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


class BasketViewSet(viewsets.ModelViewSet):
    """
    ViewSet for handling basket operations.
    Provides CRUD operations for basket items.
    """
    queryset = Basket.objects.all()
    serializer_class = BasketSerializer

    def perform_create(self, serializer):
        id=self.request.data.get('id')
        
        if id:
            serializer.save(id=id)
        serializer.save()


class ClearBasket(APIView):


    def delete(self, request):
        Basket.objects.all().delete()
        return Response({'message': 'basket cleared successfully!'}, status=status.HTTP_200_OK)
        