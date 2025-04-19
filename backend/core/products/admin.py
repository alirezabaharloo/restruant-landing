from django.contrib import admin
from .models import Category, Product
from django.contrib.sessions.models import Session
from .models import Basket

class SessionAdmin(admin.ModelAdmin):
    def _session_data(self, obj):
        return obj.get_decoded()
    list_display = ['session_key', '_session_data', 'expire_date']
    readonly_fields = ['_session_data']


admin.site.register(Session, SessionAdmin)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Basket)