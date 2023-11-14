from django.urls import path
from .import views
urlpatterns = [
    path('create/',views.postProducts,name="create_products"),
    path('tshirts/',views.getTshirts,name="get_tshirts"),
    path('shirts/',views.getShirts,name="get_shirts"),
    path('pants/',views.getPants,name="get_pants"),
    path('accessories/',views.getAccessories,name="get_accessories"),
    path('addtocart/',views.addToCart,name="addtocart"),
    
]
