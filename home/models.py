from django.db import models

# Create your models here.

class Contact(models.Model):
    STATUS = [
        # ('actual db value', 'admin value')
        ('New', 'New'),
        ('Pending', 'Pending'),
        ('Updated', 'Updated'),
        ('Completed', 'Completed'),

    ]             

    full_name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField()
    status = models.CharField(max_length=50, default= 'New', choices= STATUS) 
    sent = models.DateField(auto_now=True)
    updated =models.DateField(auto_now_add=True)

    def _str_(self):
        return self.full_name

    class Meta:
        db_table = 'contact'
        managed = True
        verbose_name = 'contact'
        verbose_name_plural = 'contact'

class Category(models.Model):
    title = models.CharField(max_length=50)
    img = models.ImageField(upload_to= 'Category', default= 'category.jpg')
    slug = models.SlugField(default= '-')
    
    def __str__(self):
        return self.title

 

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete= models.CASCADE) 
    title_r = models.CharField(max_length=50)
    slug = models.SlugField(default='-')
    img_r = models.ImageField(upload_to = 'Product', default= 'product.jpg')
    description =models.TextField()
    price = models.FloatField()
    max_quantity = models.IntegerField()
    min_quantity = models.IntegerField()
    size = models.IntegerField()
    display = models.BooleanField()
    shoes = models.BooleanField(default=False)
    bag = models.BooleanField(default=False)
    perfume = models.BooleanField(default=False)
    cloth = models.BooleanField(default=False)
    uploaded = models.DateField(auto_now_add=True)

    def __str__(self):
       return self.title_r




# from  userprofile.models import Profile
# class Delivery(models.Model):
#     MODE = [
        #    db side  and         adminside
#         ('on delivery', 'on delivery'),
#         ('Wth card', 'Wth card'),
#         ('Online Payment', 'Online Payment'),
#     ]
#     profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null-True)
#     product = models.ForeignKey(Product, on_delete=models.PROTECT)
#     cart = models.ForeignKey(Cart, on_delete=models.PROTECT)
#     payment_mode = models.CharField(max_length=50, default='on delivery', choices=MODE)






