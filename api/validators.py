from rest_framework.validators import UniqueValidator

from rest_framework import serializers

def validate_title(model):
    unique_product_title = UniqueValidator(queryset=model.objects.all(), lookup='iexact')
    return unique_product_title

def validate_meat_type(value):
        meat_type = value.lower()
        if meat_type in ['chicken', 'goat', 'beef', 'lamb']:
            return value
        else:
            raise serializers.ValidationError("Enter valid meat type! 'chicken', 'goat', 'beef', or 'lamb'")