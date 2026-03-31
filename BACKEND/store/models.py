from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Category(models.Model): 
    name = models.CharField(max_length=100,unique=True)
    slug =models.SlugField(unique=True)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    name =models.CharField(max_length=100)
    Category =models.ForeignKey(Category,on_delete=models.CASCADE,related_name='products')
    description =models.TextField(blank=True)
    price= models.DecimalField(max_digits=10, decimal_places=2)
    image =models.ImageField(upload_to='products/',blank=True,null=True)
    created_at =models.DateTimeField(auto_now_add=True)
    badge =models.CharField(max_length=100)
    rating= models.DecimalField(max_digits=10, decimal_places=2)
    reviews= models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    address =models.CharField(max_length=255,blank=True)
    phone_number =models.CharField(max_length=20,blank=True)

    def __str__(self):
        return self.user.username

class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    total_amount =models.DecimalField(max_digits=10, decimal_places=2)
    created_at =models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name='items')
    product =models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity =models.PositiveIntegerField(default=1)
    price =models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

class Cart(models.Model):
    user =models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Cart {self.id} for {self.user}"
    
    @property
    def total_price(self):
        return sum(item.subtotal for item in self.items.all())
    
class CartItem(models.Model):
    cart =models.ForeignKey(Cart,on_delete=models.CASCADE,related_name='items')
    product =models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity =models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"
    
    @property
    def subtotal(self):
        return self.quantity * self.product.price
