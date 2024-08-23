from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = (
            'id', 'body', 'rgb_red', 'rgb_blue', 'rgb_green'
        )