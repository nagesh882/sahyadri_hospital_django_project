from django.urls import path
from . import views 

urlpatterns = [


    path('', views.index, name='index'),

    path('jack', views.jack, name='jack'),

    path('gallery', views.gallery, name='gallery'),

    path('doctormac', views.doctormac, name='doctormac'),

    path('contact', views.contact, name='contact'),

]