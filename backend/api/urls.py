from api import views
from django.urls import path



urlpatterns = [
    path('', views.Homepage.as_view()),
    path('user/', views.UserList.as_view())

]
