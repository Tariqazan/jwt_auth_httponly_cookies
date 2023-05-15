from django.urls import path

from dummy_list.views.nutritions.list import DummyList
from dummy_list.views.user_nutritions.list import UserDummyList
from dummy_list.views.user_nutritions.create import AddUserNutrition


urlpatterns = [
    path('list/', DummyList.as_view()),
    path('selected/', UserDummyList.as_view()),
    path('add/selected/', AddUserNutrition.as_view()),
]