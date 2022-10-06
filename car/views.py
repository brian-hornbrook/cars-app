from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from .forms import CarForm
from .models import Car

def cars(request):
    if request.method == 'GET':
        cars = Car.objects.all()
        return render(request, 'cars.html', {'cars': cars})

def createcar(request):
    if request.method == 'GET':
        return render(request, 'add_car.html')
    else:
        make = request.POST['make']
        model = request.POST['model']
        year = request.POST['year']
        condition = request.POST['condition']
        car = Car.objects.create(make=make, model=model, year=year, condition=condition)
        return redirect('/')
    
def updatecar(request, car_pk):
    car = get_object_or_404(Car, pk=car_pk)
    if request.method == 'GET':
        form = CarForm(instance=car)
        return render(request, 'updatecar.html', {'car': car, 'form': form})
    else:
        form = CarForm(request.POST, instance=car)
        form.save()
        return redirect('/')

def deletecar(request, car_pk):
    car = get_object_or_404(Car, pk=car_pk)
    if request.method == 'POST':
        car.delete()
        return redirect('/')