from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.viewsets import ViewSet 
from rest_framework.response import Response

from .serializers import ProfileSerializer
from .models import Profile 

class ProfileList(ViewSet):
    """ Gets the profile list of all the users 
    """
    def get(self, request):

        profiles = Profile.objects.all().exclude(user=request.user)
        serializer = ProfileSerializer(profiles, many=True)
    
        return Response(serializer.data, status=200)

class ProfileUser(ViewSet):
    """ Gets the profile of the user in session
    """
    def get(self, request):

        user = User.objects.get(id=self.request.user.id)
        profile = user.profile  #get the profile of said user through related_name
        serializer = ProfileSerializer(profile)

        return Response(serializer.data, status=200)

        