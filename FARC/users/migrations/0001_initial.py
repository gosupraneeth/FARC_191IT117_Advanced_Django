# Generated by Django 3.1.4 on 2021-06-05 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TimeTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('row', models.IntegerField(default=0)),
                ('col', models.IntegerField(default=0)),
                ('period', models.CharField(max_length=32)),
            ],
        ),
    ]
