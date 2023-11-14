from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    product_type = models.CharField(max_length=50)                                 #shirt,t-shirt....
    size = ArrayField(models.CharField(max_length=10))
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount=models.DecimalField(max_digits=2,decimal_places=0)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    status=models.CharField(max_length=10,default='Buy')
    
    def  __str__(self) -> str:
        return self.name
    
class Cart(models.Model):
    cart_user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.cart_user.username
   
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def total_item_price(self):
        return self.product.price * self.quantity

    def __str__(self):
        return f"Cart Item: {self.product.name}, Quantity: {self.quantity}"