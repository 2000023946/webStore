from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.welcome, name="welcome"),
    path('<str:name>', views.page, name="page")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
