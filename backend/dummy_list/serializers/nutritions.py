from rest_framework import serializers

from dummy_list.models import Nutrition


class NutritionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutrition
        fields = '__all__'
