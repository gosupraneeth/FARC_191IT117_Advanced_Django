from django.contrib import admin
from .models import TimeTable,Students
# Register your models here.

class TimeTableAdmin(admin.ModelAdmin):
    list_display=("row","col","period")

class StudentsAdmin(admin.ModelAdmin):
    list_display=("stud_id","stud_name","is_cr")

admin.site.register(TimeTable,TimeTableAdmin)
admin.site.register(Students,StudentsAdmin)