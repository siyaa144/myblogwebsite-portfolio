from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

from .models import Post
from .permissions import IsAuthorOrReadOnly
from .serializers import PostSerializer, RegisterSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by("-created_date")
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
