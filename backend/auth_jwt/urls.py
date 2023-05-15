
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cookies/token/', include('cookies_token.urls')),
    path('auth/', include('authentication.urls')),
    path('dummy/', include('dummy_list.urls')),
]
