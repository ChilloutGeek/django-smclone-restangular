from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

class Profile(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.CharField(max_length=350, default='welcome to my bio', null=True)
    profilepic = models.ImageField(null=True, blank=True, upload_to='profiles/', default='default.jpeg')
    
    def __str__(self):
        return f"{self.user}"