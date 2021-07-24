from django.db import models
from django.conf import settings
# Create your models here.

User = settings.AUTH_USER_MODEL

# Create your models here.

class Post(models.Model):

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    imagecontent = models.ImageField(null=True, blank=True, upload_to='content/')
    created = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.title}" 

