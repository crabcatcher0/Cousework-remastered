from api import views
from django.urls import path
from .views import show_user


urlpatterns = [
    path('register', views.Registerpage.as_view()),
    # path('user/', views.UserList.as_view()),
    # path('user/<int:id>/', views.UserList.as_view()),
    path('show_user/', show_user, name='show_user'),
    path('login', views.LoginView.as_view()),
    path('hostel/', views.HostelView.as_view()),
    path('hostel/<int:id>/', views.HostelView.as_view()),
    path('filter/<str:hostel_type>/', views.FilterHostelView.as_view())
]
