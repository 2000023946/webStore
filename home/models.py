from django.db import models
from django.db.models import Q
import datetime
# Create your models here.

class Meat(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='meat/', blank=True)

    def __str__(self) -> str:
        return f"{self.name}"
    
class BaseProductQuerySet(models.QuerySet):
    def get_search_query(self, query):
        lookup = Q(Q(name__icontains=query) | Q(reference__icontains=query))
        return self.objects.all() if query == '' else self.filter(lookup)
    
class BaseProductManager(models.Manager):
    def get_queryset(self) -> models.QuerySet:
        return BaseProductQuerySet(model=self.model, using=self._db)
    def search(self, query):
        return self.get_queryset().get_search_query(query)

    
class GroceryQuerySet(BaseProductQuerySet):
    """
    Generates Grocery QuerySets
    """
    
class GroceryManager(BaseProductManager):
    """
    Runs Grocery QuerySets
    """

class GroceryProduct(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='grocery')
    #reference are like adj for product help with the search engine
    #ex. meat it will be like fresh/frozen, bread, fruit, ect
    reference = models.CharField(max_length=1000000, blank=True)

    objects = GroceryManager()

    def __str__(self) -> str:
        return f" {self.name} description -> {self.reference}"
    
class MeatQuerySet(BaseProductQuerySet):
    """
    Generates Meat QuerySets
    """
    
class MeatManager(BaseProductManager):
    """
    Makes Meat QuerySets
    """
    
class MeatProduct(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='meat_products/')
    #True -> fresh              False -> frozen
    is_fresh = models.BooleanField(default=True)
    #reference are like adj for product help with the search engine
    meat_type = models.ForeignKey(Meat, on_delete=models.CASCADE, related_name="products")
    #ex. meat it will be like fresh/frozen, bread, fruit, ect
    reference = models.CharField(max_length=10000000, blank=True)

    objects = MeatManager()

    def __str__(self) -> str:
        return f"{self.name} description -> {self.reference}"
    
class Form(models.Model):
    reason = models.CharField(max_length=20)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    product = models.CharField(max_length=100)
    msg = models.TextField()
    created_at = models.DateTimeField(default=datetime.datetime.now())

    