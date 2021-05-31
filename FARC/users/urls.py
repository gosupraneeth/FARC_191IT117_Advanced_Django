from django.urls import path
from . import views

urlpatterns=[
    path("",views.home,name='home'),
    path('loginindex',views.loginindex,name='loginindex'),
    path('login',views.login_view,name='login'),
    path('signup',views.signup,name='signup'),
    path('logout',views.logout_view,name='logout'),
    path('timetable',views.timetable,name='timetable'),
]