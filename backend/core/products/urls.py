from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'basket', views.BasketViewSet, basename='basket')

urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('product-categories/', views.ProductCategoryListView.as_view()),
    path('on-sale-products/', views.OnsaleProductsView.as_view()),
    path('clear-basket/', views.ClearBasket.as_view(), name='clear-basket'),
    path('', include(router.urls)),  # Include the router URLs
]