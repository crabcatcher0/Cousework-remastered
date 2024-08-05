from django.contrib.auth.forms import UserCreationForm
from rest_framework import serializers


class UserCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCreationForm
        fields = ['email', 'username', 'first_name', 'last_name', 'password']