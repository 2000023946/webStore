from django.forms import ValidationError
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .perm_auth import PermissionsAndAuthentication

from home.serializers import *

from rest_framework import generics


# Create your views here.
class BaseGroceryAPIView(PermissionsAndAuthentication, generics.GenericAPIView):
    queryset = GroceryProduct.objects.all()
    serializer_class = GroceryProductSerializer

class GroceryListCreateAPIView(BaseGroceryAPIView, generics.ListCreateAPIView):
    """
    View to handle listing all grocery products
    """

class GroceryMixinAPIView(BaseGroceryAPIView, generics.RetrieveAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
    """
    View to handle retrieving, updating, and destroying grocery products
    """

class BaseMeatAPIView(PermissionsAndAuthentication, generics.GenericAPIView):
    queryset = MeatProduct.objects.all()
    serializer_class = MeatProductSerializer

class MeatListCreateAPIView(BaseMeatAPIView, generics.ListCreateAPIView):
     """
    View to handle listing all meat products
    """

class MeatMixinAPIView(BaseMeatAPIView, generics.RetrieveAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
    """
    View to handle retrieving, updating, and destroying grocery products
    """
    
class BaseFormAPIView(PermissionsAndAuthentication, generics.GenericAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer

class FormListAPIView(BaseFormAPIView, generics.ListAPIView):
    """
    View to handle Listing all form instances
    """

class FormMixinAPIView(BaseFormAPIView, generics.RetrieveAPIView, generics.DestroyAPIView):
    """
    View to handle retrieving specific instances and destroying 
    """

class AllProductsList(PermissionsAndAuthentication, APIView):

    def get(self, request):

        products = {
            "meat": {
                'q' : 'all'
            },
            "grocery" : {
                'q' : 'all'
            }
        }

        data = {
            "Products": ProductReadSerializer(products).data
        }
        return Response(data)
    
class SearchListAPIView(PermissionsAndAuthentication, APIView):
    """
    Implement Search for Grocery DB
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        lookup = request.GET.get('q')

        if not lookup:
            return Response({'error' : "To search Enter q. example url : http://127.0.0.1:8000/api/search/?q=you_search_results"})

        search_products = {
            "meat": {
                'q' : lookup
            },
            "grocery" : {
                'q' : lookup
            }
        }

        data = {
            f"{lookup}" : ProductReadSerializer(search_products).data
        }
        return Response(data)

class MeatTypeListAPIView(PermissionsAndAuthentication, generics.ListAPIView):
    queryset = Meat.objects.all()
    serializer_class = MeatSerializer

