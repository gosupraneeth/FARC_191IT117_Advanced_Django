from django.db import models

# Create your models here.
class TimeTable(models.Model):
    row = models.IntegerField(default=0)
    col = models.IntegerField(default=0)
    period = models.CharField(max_length=32,null=True,blank=True)
    def __str__(self):
        return f"({self.row} ,{self.col}) => {self.period}"

class Students(models.Model):
    stud_id = models.CharField(max_length=20)
    stud_name =models.CharField(max_length=64)
    is_cr = models.BooleanField(default=False)