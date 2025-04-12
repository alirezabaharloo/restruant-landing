from django.urls import path, include
from . import views

urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('product-categories/', views.ProductCategoryListView.as_view()),
    path('on-sale-products/', views.OnsaleProductsView.as_view()),
    path('basket/', views.BasketView.as_view()),
]
