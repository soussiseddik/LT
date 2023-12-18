from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=30)
    price = models.CharField(max_length=7, default='0000DT')
    image = models.ImageField(upload_to= 'images/') 
    info_image1 = models.ImageField(upload_to= 'images/', default=0)
    info_image2 = models.ImageField(upload_to= 'images/', default=0) 
    allCategorys = (['1', 'phones'], 
               ['2','computers'], 
               ['3', 'games'], 
               ['4', 'headphones'], 
               ['5', 'soundcards'], 
               ['6', 'microphones'])
    category = models.CharField(choices=allCategorys, max_length=1, default='1')     
    caract = models.CharField(max_length=500, default='no caracters')
    def __str__(self):
        return self.name
    def get_path(self):
        return self.name.replace(' ', '-')
