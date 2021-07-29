from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from users.models import Profile

class Post(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    imagecontent = models.ImageField(null=True, blank=True, upload_to='content/')
    created = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.title}" 


class Comments(models.Model):

    commentor = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
