from django.shortcuts import render
from rest_framework import serializers
from rest_framework.viewsets import ViewSet 
from rest_framework.response import Response
# Create your views here.

from .serializers import PostSerializer
from .models import Post 

class PostView(ViewSet):

    def postlist(self, request):

        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data, status=200)

    def createpost(self,request):

        serializer = PostSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)