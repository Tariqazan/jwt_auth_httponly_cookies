from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from rest_framework_simplejwt.tokens import AccessToken, TokenError


class VerifyToken(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        access_token = request.COOKIES.get(
            settings.SIMPLE_JWT['AUTH_COOKIE_ACCESS_TOKEN']) or None

        if access_token is not None:
            try:
                AccessToken(access_token)
                response = {'valid': True, 'message': 'Token is Valid'}
                return Response(response)

            except TokenError:
                refresh_token = request.COOKIES.get(
                    settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH_TOKEN']) or None
                response = {'token': refresh_token,
                            'valid': False, 'message': 'Token is Invalid'}
                return Response(response)
        else:
            # Token parameter is missing
            return Response({'valid': False, 'message': 'Token parameter is missing'}, status=status.HTTP_400_BAD_REQUEST)
