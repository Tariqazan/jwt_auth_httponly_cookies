from rest_framework import serializers

from dummy_list.models import UserNutrition


class UserNutritionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNutrition
        exclude = ['user']
        depth = 1

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        response = representation['nutrition']
        response['id'] = representation['id']
        return response
