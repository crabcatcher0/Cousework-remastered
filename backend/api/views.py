from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserListSerializer

# Create your views here.


class Homepage(APIView):
    def post(self, request):
        serialized = UserSerializer(data=request.data)
        if serialized.is_valid():
            serialized.save()
            return Response({'message:':'success!!'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)
        

class UserList(APIView):
    def get(self, request, id=None):
        query = User.objects.all()
        serializer = UserListSerializer(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
