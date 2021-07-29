from django.shortcuts import render
from rest_framework import serializers
from rest_framework.viewsets import ViewSet 
from rest_framework.response import Response
# Create your views here.

from .serializers import PostSerializer, CommentSerializer
from .models import Post, Comments

class PostView(ViewSet):

    def postlist(self, request):
        """Gets the lists of posts
        """

        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data, status=200)

    def createpost(self,request):
        """Creates a single post
        """
        serializer = PostSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

class CommentView(ViewSet):

    def get(self,request):
        """get the lists of comments in each posts.
        """
        posts = Post.objects.all()
        comments = Comments.objects.filter(post__in=posts) #get the comments in posts 
        serializer = CommentSerializer(comments, many=True)

        return Response(serializer.data, status=201)        
        
