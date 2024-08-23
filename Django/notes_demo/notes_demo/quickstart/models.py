from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)