from django.contrib.auth import login, authenticate, logout
from users.forms import SignUpForm
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse


# Create your views here.

def home(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("loginindex"))
    return render(request,'users/home.html')

def loginindex(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    return render(request, "users/home.html")

def login_view(request):
    if request.method =="POST":
        username= request.POST['username']
        password= request.POST['password']
        user =authenticate(request, username=username, password= password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("loginindex"))
        else:
            return render(request, "users/home.html",{
                "message": "Invalid Credentials",
                'logincard':True
            })

    return render(request, "users/home.html",{
        'logincard':True
    })

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('loginindex')
    else:
        form = SignUpForm()
    return render(request, 'users/home.html', {
        'form': form,
        'signupcard':True
    })

def logout_view(request):
    logout(request)
    return render(request, 'users/home.html',{
        "message":"Logged Out."
    })

def timetable(request):
    return render(request,'users/user.html')
