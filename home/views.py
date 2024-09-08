from django.shortcuts import render, redirect
from .models import GroceryProduct, MeatProduct, Meat, Form
from django.http import Http404, JsonResponse
from django.db.models import Q
import json 
# Create your views here.

def render_page(request, name):
    if name in ['meat', 'grocery', 'contact-us', 'search']:
        q = request.GET.get('')
        if q is None:
            q = ''
        return render(request, 'home/welcome_page.html',{
            'page':name,
            'q': q
        })

def page(request, name):
    if request.method == 'POST':
        reason = request.POST.get('reason')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        product = request.POST.get('product')
        msg = request.POST.get('msg')
        print(reason + first_name+ last_name+ email+ phone+ msg)
        form = Form(reason=reason, first_name=first_name, last_name=last_name, email=email, phone=phone, msg=msg)
        form.save()
        return render_page(request, name)
    elif request.method == "GET":
        return render_page(request, name) 
    return Http404('error')

def welcome(request):
    return render(request, 'home/welcome_page.html')

def auth_user(request):
    print(request.user.is_authenticated)
    if not request.user.is_authenticated:
        return {'is_auth': False, 'return' : {"Detail" : "User not authenticated!", "home":"http://127.0.0.1:8000/"}}
    return True

def meat_json(request):
    if not auth_user(request)['is_auth']:
        return  JsonResponse(auth_user(request)['return'], safe=False)
    meat = Meat.objects.all()
    data = list(meat.values())
    return JsonResponse(data,safe=False)

def meat_products_json(request, name):
    if not auth_user(request)['is_auth']:
        return  JsonResponse(auth_user(request)['return'], safe=False)
    name = name.capitalize()
    if name in ['Goat', 'Lamb', 'Cow', 'Chicken']:
        meat_type = Meat.objects.get(name=name)
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
    if not auth_user(request)['is_auth']:
        return  JsonResponse(auth_user(request)['return'], safe=False)
    grocery_list = GroceryProduct.objects.all()
    data = list(grocery_list.values())
    return JsonResponse(data, safe=False)

def run_search(request):
    if not auth_user(request)['is_auth']:
        return  JsonResponse(auth_user(request)['return'], safe=False)
    if request.method == "GET":
        print("request.get", request.GET)
        q = request.GET.get('q')
        if q is not None and len(q) > 0:
            #lookup for grocery and meat
            lookup = Q(Q(name__icontains=q) | Q(reference__icontains=q))
            grocery_search = GroceryProduct.objects.filter(lookup)
            meat_search = MeatProduct.objects.filter(lookup)
            data = meat_search if meat_search else grocery_search 
            data = list(data.values())
            print(data)
            return JsonResponse(data, safe=False)
