from .models import Meat, GroceryProduct, MeatProduct, Form

from rest_framework import serializers
from api.validators import *

class MeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meat
        fields = [
            'name',
            'image'
        ]

class GroceryProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField(validators=[validate_title(GroceryProduct)])
    class Meta:
        model = GroceryProduct
        fields = '__all__'

class MeatProductSerializer(serializers.ModelSerializer):
    meat_type = serializers.CharField()
    name = serializers.CharField(validators=[validate_title(MeatProduct)])
    meat_type = serializers.CharField(validators=[validate_meat_type])
    class Meta:
        model = MeatProduct
        fields = '__all__'
    
    def create(self, validated_data):
        meat_type = validated_data['meat_type']
        meat = Meat(name=meat_type)
        meat.save()
        validated_data['meat_type'] = meat
        return validated_data
    
class MeatProductReadSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['name', 'image', 'reference', 'is_fresh', 'meat_type']
        model = MeatProduct
        fields = fields
        read_only_fields = fields
    
class GroceryProductReadSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['name', 'image', 'reference']
        model = GroceryProduct
        fields = fields
        read_only_fields = fields

class ProductReadSerializer(serializers.Serializer):
    meat = serializers.JSONField()
    grocery = serializers.JSONField()

    def to_representation(self, instance):
        meat_query = instance['meat']['q']
        grocery_query = instance['grocery']['q']

        data = {
            'meat':MeatProductReadSerializer(MeatProduct.objects.search(meat_query), many=True).data, 
            'grocery':GroceryProductReadSerializer(GroceryProduct.objects.search(grocery_query), many=True).data
        }

        return super().to_representation(data)
    
class FormSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'reason',
            'first_name',
            'last_name',
            'email', 
            'phone', 
            'product', 
            'msg', 
            'created_at'
        ]
        model = Form
        fields = fields
        read_only_fields = fields