from django.http import HttpResponse
from django.shortcuts import render


def home(request):
  # return HttpResponse("Hello this is Home page.")
  return render(request,'website/index.html')

def about(request):
  return HttpResponse("Hello this is About page.")

def contact(request):
  return HttpResponse("Hello this is Contact page.")
