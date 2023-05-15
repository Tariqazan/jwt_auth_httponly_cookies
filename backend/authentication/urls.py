from django.urls import path

from authentication.views.login import LoginView
from authentication.views.custom_refresh_token import CustomTokenRefreshView
from authentication.views.verify_token import VerifyToken

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('token/verify/', VerifyToken.as_view(), name='token_verify'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
