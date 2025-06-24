from django.db import models
from django.utils.timezone import now
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class CarMake(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    country = models.CharField(max_length=100, blank=True)


    def __str__(self):
        return f"{self.name} ({self.country})"


class CarModel(models.Model):


    CAR_TYPE_CHOICES = [
    ('SEDAN', 'Sedan'),
    ('SUV', 'SUV'),
    ('WAGON', 'Wagon'),
    ('COUPE', 'Coupe'),
    ('TRUCK', 'Truck'),
    ('HATCHBACK', 'Hatchback'),
]

    name = models.CharField(max_length=50)
    model = models.CharField(max_length=100)
    car_make = models.ForeignKey('CarMake', on_delete=models.CASCADE, related_name='models')
    type = models.CharField(max_length=20, choices=CAR_TYPE_CHOICES)
    year = models.IntegerField(validators=[MinValueValidator(2015), MaxValueValidator(2025)])
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.car_make.name} {self.model} ({self.year})"