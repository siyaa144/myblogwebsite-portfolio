from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Post


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ["username", "password"]

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
        )


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Post
        fields = [
            "id",
            "author",
            "title",
            "text",
            "created_date",
            "published_date",
        ]
        read_only_fields = ["created_date", "published_date"]
