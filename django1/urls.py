# django1/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('grcapp.urls')),  # Inclui as URLs da aplicação 'grcapp'
]
