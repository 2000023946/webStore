from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.welcome, name="welcome"),
    path('<str:name>', views.page, name="page"),
    path('json/grocery', views.grocery_json, name='grocery_json'),
    path('json/meat', views.meat_json, name='meat_json'),
    path('json/meat_products/<str:name>', views.meat_products_json, name="meat_products_json"),
    path('json/search', views.run_search, name="search")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
