from django.conf import settings
from django.middleware import csrf

from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenRefreshView

from authentication.custom_authentication import CustomAuthentication


class CustomTokenRefreshView(TokenRefreshView):
    authentication_classes = (CustomAuthentication, )
    serializer_class = TokenRefreshSerializer

    def post(self, request, *args, **kwargs):
        response_data = super().post(request, *args, **kwargs)
        access_token = response_data.data['access']
        refresh_token = response_data.data['refresh']
        print("-"*10)
        print('access_token -->', access_token)
        print("*"*10)
        print('refresh_token -->', refresh_token)
        print("+"*10)
        response = Response()
        response.delete_cookie("access_token")
        response.set_cookie(
            key=settings.SIMPLE_JWT['AUTH_COOKIE_ACCESS_TOKEN'],
            value=access_token,
            expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
        )
        response.set_cookie(
            key=settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH_TOKEN'],
            value=refresh_token,
            expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
        )
        csrf.get_token(request)
        return Response({'access': access_token, 'refresh': refresh_token})
