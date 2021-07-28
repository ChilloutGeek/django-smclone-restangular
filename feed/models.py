from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class Post(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    imagecontent = models.ImageField(null=True, blank=True, upload_to='content/')
    created = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.title}" 

