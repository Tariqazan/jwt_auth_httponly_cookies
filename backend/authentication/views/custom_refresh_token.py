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
        response = Response()
        response.set_cookie('access_token', access_token)
        response.set_cookie('refresh_token', refresh_token)
        response.data = {'access_token': access_token, 'refresh_token': refresh_token}
        return response
