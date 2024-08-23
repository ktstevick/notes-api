from rest_framework import viewsets
from .serializers import NoteSerializer
from .models import Note

# Using ModelViewSet since the whole suite is helpful
class NoteViewSet(viewsets.ModelViewSet):
    """ API endpoints enable notes to be viewed, created, and destroyed """
    queryset = Note.objects.all()
    serializer_class = NoteSerializer