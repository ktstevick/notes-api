from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Note(models.Model):
    body = models.CharField(max_length=100)

    rgb_red = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(255)])
    rgb_blue = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(255)])
    rgb_green = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(255)])