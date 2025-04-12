from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import Category
from .session import BasketSession

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


class BasketView(APIView):

    def post(self, request):
        srz_data = BasketSerializer(data=request.data, many=True, context={'request': request})
        if srz_data.is_valid():
            basket_session = BasketSession(request)
            basket_session.update_basket(srz_data.validated_data)
            request.session.modified = True
            return Response({'message': 'product added to basket successfully!'}, status=status.HTTP_200_OK)
        return Response(srz_data.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        basket_session = BasketSession(request)
        basket_data = basket_session.show
        return Response(basket_data, status=status.HTTP_200_OK)



        