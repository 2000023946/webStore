from django.db import models

# Create your models here.

class Meat(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='home/static/home')

class GroceryProduct(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='home/static/home')
    #reference are like adj for product help with the search engine
    #ex. meat it will be like fresh/frozen, bread, fruit, ect
    reference = models.CharField(max_length=10000000)

    def __str__(self) -> str:
        return f"Grocery: {self.name} description -> {self.reference}"
    
class MeatProduct(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='home/static/home')
    #reference are like adj for product help with the search engine
    meat_type = models.ForeignKey(Meat, on_delete=models.CASCADE, related_name="products")
    #ex. meat it will be like fresh/frozen, bread, fruit, ect
    reference = models.CharField(max_length=10000000)

    def __str__(self) -> str:
        return f"Meat : {self.name} description -> {self.reference}"
    