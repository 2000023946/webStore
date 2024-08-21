from django.contrib import admin
from .models import GroceryProduct, MeatProduct, Meat
# Register your models here.

admin.site.register(GroceryProduct)
admin.site.register(MeatProduct)
admin.site.register(Meat)