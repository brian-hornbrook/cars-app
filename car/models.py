from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    condition = models.CharField(max_length=100)

    def __str__(self):
        return self.model