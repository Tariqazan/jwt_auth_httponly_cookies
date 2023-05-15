from rest_framework.generics import ListAPIView

from dummy_list.models import UserNutrition
from dummy_list.serializers.user_nutritions import UserNutritionSerializer

# Create your views here.


class UserDummyList(ListAPIView):
    queryset = UserNutrition
    serializer_class = UserNutritionSerializer

    def get_queryset(self):
        user = self.request.user
        return user.user_nutritions.all().select_related('user').select_related('nutrition')
