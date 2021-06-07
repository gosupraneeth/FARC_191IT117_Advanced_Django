from django.contrib.auth import login, authenticate, logout
from users.forms import SignUpForm
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from .models import Students,TimeTable
import json
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

def home(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("loginindex"))
    return render(request,'users/home.html')

def loginindex(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("login"))
    
    name=request.user.username
    try:
        student=Students.objects.get(stud_id=name)
    except:
        student=Students(stud_id=request.user.username,stud_name=request.user.first_name +" " + request.user.last_name)
        student.save()

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
    data = dict()
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
    time = ['Day / Time','9:45 - 10:15','10:30 - 11:00','11:15 - 11:45','11:45 - 12:30','1:15 - 1:45','2:00 - 2:30','2:45 - 3:15','3:30 - 4:00',]
    for i in range(5):
        for j in range(8):
            tt=TimeTable.objects.get(row=i,col=j)
            data[(i,j)]=str(tt.period)
    name=request.user.username
    student=Students.objects.get(stud_id=name)
    return render(request,'users/timetable.html',{
        "data":data,
        "is_cr": student.is_cr,
        "days" : days,
        "time" :time,
    })

def edit(request):
    name=request.user.username
    student=Students.objects.get(stud_id=name)
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
    time = ['Day / Time','9:45 - 10:15','10:30 - 11:00','11:15 - 11:45','11:45 - 12:30','1:15 - 1:45','2:00 - 2:30','2:45 - 3:15','3:30 - 4:00',]
    if(student.is_cr):
        data = dict()
        for i in range(5):
            for j in range(8):
                tt=TimeTable.objects.get(row=i,col=j)
                data[(i,j)]=str(tt.period)
        return render(request,'users/user.html',{
            "data":data,
            "days" : days,
            "time" : time,
        })
    return redirect('timetable')

@csrf_exempt
def save(request):
    if request.is_ajax():
        if request.method == 'POST':
            data = request.POST.get('senddata')
            data = json.loads(data)
            tt= TimeTable.objects.all()
            for t in tt:
                t.period=None
                t.save()
            for key,value in data.items():
                tt = TimeTable.objects.get(row=int(key[1]),col=int(key[3]))
                tt.period = value
                tt.save()
    return redirect('timetable')
