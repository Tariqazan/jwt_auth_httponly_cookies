from django.db import models
from django.utils import timezone

from authentication.models import User

# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=timezone.now())
    updated_at = models.DateTimeField(auto_now=timezone.now())

    class Meta:
        abstract = True


class Nutrition(BaseModel):

    desert = models.CharField(max_length=100)
    calories = models.CharField(max_length=100)
    fat = models.CharField(max_length=100)
    carbs = models.CharField(max_length=100)
    protein = models.CharField(max_length=100)

    class Meta:
        db_table = "Nutrition"


class UserNutrition(BaseModel):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_nutritions")
    nutrition = models.ForeignKey(Nutrition, on_delete=models.DO_NOTHING, related_name="user_nutritions")

    class Meta:
        db_table = "UserNutrition"