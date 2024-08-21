from django.shortcuts import render
from .models import GroceryProduct, MeatProduct, Meat
from django.http import JsonResponse
# Create your views here.

def page(request, name):
    print(request)
    return render(request, 'home/welcome_page.html',{
        'page':name
    })

def welcome(request):
    return render(request, 'home/welcome_page.html')