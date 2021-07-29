from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Post, Comments


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('id',
        'owner',
        'title', 
        'description', 
        'imagecontent', 
        'created', 
        'published_date',
        'comments'
        )

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comments
        fields = ('id',
        'commentor',
        'post',
        'name',
        'body',
        'created_on',
        )
