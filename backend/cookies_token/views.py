from django.http import Http404

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from authentication.models import User
from authentication.serializers import UserSerializer

# Create your views here.


class UserDetails(APIView):
    """
        Get logged in user information as response
    """

    def get_object(self, id):
        try:
            user = User.objects.get(id=id)
            return user
        except User.DoesNotExist:
            raise Http404

    def get(self, request):
        user = self.get_object(request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)