from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Profile


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class ProfileSerializer(ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ('id','user','bio','profilepic')
