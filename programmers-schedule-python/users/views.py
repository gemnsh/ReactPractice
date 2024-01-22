from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login

@api_view(['POST'])

def login(request):
    print(request.data)
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request,email=email, password=password)
    if user is None:
        return Response({'message': '아이디 또는 비밀번호가 일치하지 않습니다.'}, status=status.HTTP_401_UNAUTHORIZED)

    update_last_login(None, user)

    return Response({ 'message': '로그인 완료'}, status=status.HTTP_200_OK)