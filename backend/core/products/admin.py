from django.contrib import admin
from .models import *
from django.contrib.sessions.models import Session

class SessionAdmin(admin.ModelAdmin):
    def _session_data(self, obj):
        return obj.get_decoded()
    list_display = ['session_key', '_session_data', 'expire_date']
    readonly_fields = ['_session_data']

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ['get_cost']
    fields = ['product', 'quantity', 'get_cost']

    def get_cost(self, obj):
        return f"${obj.get_cost():.2f}"
    get_cost.short_description = 'Total Cost'

class OrderAdmin(admin.ModelAdmin):
    list_display = ['user_info', 'created_date', 'updated_date', 'get_total_price']
    readonly_fields = ['created_date', 'updated_date', 'get_total_price']
    inlines = [OrderItemInline]
    list_filter = ['created_date', 'updated_date']
    search_fields = ['user_info__email']

    def get_total_price(self, obj):
        return f"${obj.get_total_price():.2f}"
    get_total_price.short_description = 'Total Price'

class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'discount', 'quantity', 'category']
    list_filter = ['category', 'discount']
    search_fields = ['title', 'description']
    readonly_fields = ['price_with_discount']

class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at']
    readonly_fields = ['created_at']
    search_fields = ['email']

admin.site.register(Session, SessionAdmin)
admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(UserInfo, UserInfoAdmin)