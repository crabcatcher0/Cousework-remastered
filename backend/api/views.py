from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.forms import UserCreationForm
from .serializers import UserCreationSerializer

# Create your views here.


class Homepage(APIView):
    # def get(self, request):
    #     return Response({'message:':'Welcome'}, status=status.HTTP_200_OK)
    
    def post(self, request):
        querry = UserCreationForm()
        serialized = UserCreationSerializer(querry, data=request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)

    