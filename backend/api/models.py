from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Nazwa drużyny")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    