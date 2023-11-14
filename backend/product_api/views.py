from django.shortcuts import render
from rest_framework.response import Response
from .models import Product,Cart,CartItem
from .serializers import ProductSerializer,CartItemSerializer,CartSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def postProducts(request):
    serializers=ProductSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def getTshirts(request):
    data=Product.objects.filter(product_type='T-shirt')
    serializer=ProductSerializer(data,many=True)
    return Response(data=serializer.data)
   
    
    
@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def getShirts(request):
    data=Product.objects.filter(product_type='Shirt')
    serializer=ProductSerializer(data,many=True)
    return Response(data=serializer.data)
   
    

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def getPants(request):
    data=Product.objects.filter(product_type='Pant')
    serializer=ProductSerializer(data,many=True)
    return Response(data=serializer.data)
   
    
    
@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def getAccessories(request):
    data=Product.objects.filter(product_type='Accessories')
    serializer=ProductSerializer(data,many=True)
    return Response(data=serializer.data)
   
    

    
@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def addToCart(request):
    user = request.user
    cart=Cart.objects.get(cart_user=user)
    
    product = Product.objects.get(id=1)
    
    cart_item = CartItem(cart=cart, product=product, quantity=1)
    cart_item.save()

    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data, status=status.HTTP_201_CREATED)



    
@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def displayCartItems(request):
    user = request.user
    cart_items=CartItem.objects.get(cart=user)
    serializer=CartItemSerializer(cart_items,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)