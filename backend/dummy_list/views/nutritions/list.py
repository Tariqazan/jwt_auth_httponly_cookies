from rest_framework.generics import ListAPIView

from dummy_list.models import Nutrition
from dummy_list.serializers.nutritions import NutritionSerializer

# Create your views here.


class DummyList(ListAPIView):
    serializer_class = NutritionSerializer
    queryset = Nutrition.objects.all().order_by('-created_at')
