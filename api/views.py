from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from home.serializers import *

from rest_framework import generics


# Create your views here.
class BaseGroceryAPIView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
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

class BaseMeatAPIView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
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
    
class BaseFormAPIView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
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

class AllProductsList(APIView):
    permission_classes = [IsAuthenticated]

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
    
class SearchListAPIView(APIView):
    """
    Implement Search for Grocery DB
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        lookup = request.GET.get('q')

        search_products = {
            "meat": {
                'q' : lookup
            },
            "grocery" : {
                'q' : lookup
            }
        }

        data = {
            'Search Results' : ProductReadSerializer(search_products).data
        }
        return Response(data)


