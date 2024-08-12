from django.shortcuts import render

# Create your views here.

def products(request):
    return render(request, 'home/products.html')

def welcome(request):
    return render(request, 'home/welcome_page.html')