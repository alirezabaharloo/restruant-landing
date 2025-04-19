
from django.contrib import admin
from django.conf import settings  
from django.conf.urls.static import static  
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('products.urls'))
    # path('', include('accounts.urls'))
]

if settings.DEBUG:  # Only in development  
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)