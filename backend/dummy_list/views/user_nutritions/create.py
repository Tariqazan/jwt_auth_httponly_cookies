from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status

from dummy_list.serializers.user_nutritions import UserNutritionSerializer
from dummy_list.models import UserNutrition


class AddUserNutrition(CreateAPIView):
    serializer_class = UserNutritionSerializer

    def create(self, request):
        user_nutrition_data = request.data
        user_id = self.request.user.id
        user_nutritions = []
        for nutrition_data in user_nutrition_data:
            user_nutrition = UserNutrition(
                user_id=user_id,
                nutrition_id=nutrition_data['id']
            )
            user_nutritions.append(user_nutrition)
        user_nutritions = UserNutrition.objects.bulk_create(user_nutritions)
        serializer = self.serializer_class(user_nutritions, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
