from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserListSerializer, LoginSerializer
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class Registerpage(APIView):
    def post(self, request):
        serialized = UserSerializer(data=request.data)
        if serialized.is_valid():
            user_data = serialized.validated_data
            user = User(
                username = user_data['username'],
                first_name = user_data['first_name'],
                last_name = user_data['last_name']
            )
            password = user_data['password']
            user.set_password(password)
            user.save()
            return Response({'message:':'success!!'}, status=status.HTTP_201_CREATED)
        else:
            print(serialized.errors)
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)
        


class UserList(APIView):
    def get(self, request, id=None):
        if id is None:
            query = User.objects.all()
            serializer = UserListSerializer(query, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            one_data = get_object_or_404(User, pk=id)
            serialized = UserListSerializer(one_data, partial=True)
            return Response(serialized.data, status=status.HTTP_200_OK)
        


class LoginView(APIView):
    def post(self, request):
        serialized = LoginSerializer(data=request.data)
        if serialized.is_valid():
            username = serialized.validated_data['username']
            password = serialized.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                user_data = UserListSerializer(user).data
                return Response(user_data, status=status.HTTP_200_OK)
            else:
                return Response({'message:':'not found'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)
        
