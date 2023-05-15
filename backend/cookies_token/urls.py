from django.urls import path
from .views import UserDetails

urlpatterns = [
    path('user/', UserDetails.as_view())
]