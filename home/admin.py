from django.contrib import admin
from .models import GroceryProduct, MeatProduct, Meat, Form
# Register your models here.

admin.site.register(GroceryProduct)
admin.site.register(MeatProduct)
admin.site.register(Meat)
admin.site.register(Form)