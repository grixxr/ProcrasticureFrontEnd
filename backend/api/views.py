from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

@api_view(['POST'])
def login_user(request):
    username = request.data.get('email')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(username=username, password=password)
    if user:
        return Response({"message": "Login successful", "username": user.username}, status=200)
    else:
        return Response({"message": "Invalid credentials"}, status=400)
