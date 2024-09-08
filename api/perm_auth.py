from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, TokenAuthentication as BaseTokenAuth
from rest_framework import generics


class TokenAuthentication(BaseTokenAuth):
    keyword  = 'Bearer'

class PermissionsAndAuthentication():
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication, SessionAuthentication]