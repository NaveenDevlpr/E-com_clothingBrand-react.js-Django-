from rest_framework.serializers import ModelSerializer
from .models import Product,Cart,CartItem

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# Serializer for the CartItem model
class CartItemSerializer(ModelSerializer):
    product = ProductSerializer()  # Nested serializer for the associated Product

    class Meta:
        model = CartItem
        fields = '__all__'

# Serializer for the Cart model with nested CartItemSerializer
class CartSerializer(ModelSerializer):
    items = CartItemSerializer(many=True)  # Nested serializer for the associated CartItems

    class Meta:
        model = Cart
        fields = '__all__'