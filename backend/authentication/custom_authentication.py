from rest_framework.authentication import CSRFCheck
from rest_framework import exceptions

from rest_framework_simplejwt.authentication import JWTAuthentication

from django.conf import settings


class CustomAuthentication(JWTAuthentication):

    def authenticate(self, request):
        header = self.get_header(request)

        if header is None:
            raw_token = request.COOKIES.get(
                settings.SIMPLE_JWT['AUTH_COOKIE_ACCESS_TOKEN']) or None
        else:
            raw_token = self.get_raw_token(header)

        if raw_token is None:
            return None

        try:
            validated_token = self.get_validated_token(raw_token)
            return self.get_user(validated_token), validated_token

        except:
            pass


def enforce_csrf(get_response):
    """
    Enforce CSRF validation.
    """
    def middleware(request):
        check = CSRFCheck(get_response)
        # populates request.META['CSRF_COOKIE'], which is used in process_view()
        check.process_request(request)
        reason = check.process_view(request, None, (), {})
        if reason:
            # CSRF failed, bail with explicit error message
            raise exceptions.PermissionDenied('CSRF Failed: %s' % reason)
        response = get_response(request)
        return response
    return middleware
