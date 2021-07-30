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

    def create(self,request):
        """Creates a single post
        """
        serializer = PostSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

class CommentView(ViewSet):

    def comments(self,request, post_id):
        """get the lists of comments in each posts.
        """
        post = Post.objects.get(id=post_id)
        serializer = CommentSerializer(post.comments.all(), many=True)

        return Response(serializer.data, status=201)        
        
