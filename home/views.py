from django.shortcuts import render
from .models import GroceryProduct, MeatProduct, Meat
from django.http import Http404, JsonResponse
import json 
# Create your views here.

def page(request, name):
    print(request)
    if name in ['meat', 'grocery', 'contact-us']:
        return render(request, 'home/welcome_page.html',{
            'page':name
        })
    else:
        raise Http404('error')

def welcome(request):
    return render(request, 'home/welcome_page.html')

def meat_json(request):
    meat = Meat.objects.all()
    print(meat)
    data = list(meat.values())
    return JsonResponse(data,safe=False)

def meat_products_json(request, name):
    name = name.capitalize()
    if name in ['Goat', 'Lamb', 'Cow', 'Chicken']:
        meat_type = Meat.objects.get(name=name)
        print(meat_type)
        all_meat = meat_type.products.all()
        data = list(all_meat.values())
        return JsonResponse(data, safe=False)
    if name == 'All':
        meat_list = {}
        for meat in Meat.objects.all():
            all_meat = meat.products.all()
            data = list(all_meat.values())
            meat_list[meat.name] = data
        return JsonResponse(meat_list ,safe=False)
    return Http404('error')

def grocery_json(request):
    grocery_list = GroceryProduct.objects.all()
    data = list(grocery_list.values())
    return JsonResponse(data, safe=False)
