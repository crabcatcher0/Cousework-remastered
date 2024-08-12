from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Hostel



class UserSerializer(serializers.ModelSerializer):
    is_staff = False
    is_active = True
    is_superuser = False

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'password']
       


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_active']



class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    class Meta:
        model = User
        fields = ['username', 'password']



class HostelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hostel
        fields = [
            'id',
            'hostel_name',
            'hostel_type',
            'main_location',
            'sec_location',
            'hostel_description',
            'hostel_contact_number',
            'cover_image',
            'additional_image1',
            'additional_image2',
            'additional_image3',
            'created_at' 
            ]