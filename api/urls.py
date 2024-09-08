from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.AllProductsList.as_view()),
    path('grocery/', views.GroceryListCreateAPIView.as_view()),
    path('meat/', views.MeatListCreateAPIView.as_view()),
    path('form/', views.FormListAPIView.as_view()),
    path('grocery/<int:pk>/', views.GroceryMixinAPIView.as_view()),
    path('meat/<int:pk>/', views.MeatMixinAPIView.as_view()),
    path('form/<int:pk>/', views.FormMixinAPIView.as_view()),
    path('search/', views.SearchListAPIView.as_view()),
    path('meat/type', views.MeatTypeListAPIView.as_view())
]
