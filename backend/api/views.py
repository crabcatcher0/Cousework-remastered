from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserListSerializer, LoginSerializer, HostelSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Hostel



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
        


# class UserList(APIView):
#     def get(self, request, id=None):
#         if id is None:
#             query = User.objects.all()
#             serializer = UserListSerializer(query, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         else:
#             one_data = get_object_or_404(User, pk=id)
#             serialized = UserListSerializer(one_data, partial=True)
#             return Response(serialized.data, status=status.HTTP_200_OK)
        


class LoginView(APIView):
    def post(self, request):
        serialized = LoginSerializer(data=request.data)

        if serialized.is_valid():
            username = serialized.validated_data['username']
            password = serialized.validated_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                refresh = RefreshToken.for_user(user)
                login(request, user)
                user_data = UserListSerializer(user).data

                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user': user_data
                }, status=status.HTTP_200_OK)
            else:
                return Response({'message':'Invalid Creds.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
def show_user(request):
    user = request.user
    if user.is_authenticated:
        user_data = {
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
        return Response(user_data, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Error showing data'}, status=status.HTTP_400_BAD_REQUEST)



class HostelView(APIView):
    def get(self, request, id=None):
        if id is None:
            al_hostel = Hostel.objects.all()
            all_serializer = HostelSerializer(al_hostel, many=True)
            return Response(all_serializer.data, status=status.HTTP_200_OK)
        else:
            one_hostel = get_object_or_404(Hostel, pk=id)
            one_serialized = HostelSerializer(one_hostel, partial=True)
            return Response(one_serialized.data, status=status.HTTP_200_OK)
        
    def post(self, request):
        request_data = HostelSerializer(data=request.data)
        if request_data.is_valid():
            request_data.save()
            return Response({'message':'success'}, status=status.HTTP_201_CREATED)
        else:
            return Response(request_data.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)