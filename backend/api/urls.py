from api import views
from django.urls import path



urlpatterns = [
    path('register', views.Registerpage.as_view()),
    path('user/', views.UserList.as_view()),
    path('user/<int:id>/', views.UserList.as_view()),
    path('login', views.LoginView.as_view()),
]
