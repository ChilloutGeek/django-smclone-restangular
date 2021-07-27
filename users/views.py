from django.shortcuts import render
from rest_framework import serializers
from rest_framework.viewsets import ViewSet 
from rest_framework.response import Response

from .serializers import ProfileSerializer
from .models import Profile 

class ProfileList(ViewSet):
    
    def get(self, request):

        profiles = Profile.objects.all().exclude(user=request.user)
        seralizer = ProfileSerializer(profiles, many=True)
    
        return Response(serializer.data, status=200)

class ProfileUser(ViewSet):

    def get(self, request):
 
        userprofile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(userprofile)

        return Response(serializer.data, status=200)

        