# Generated by Django 5.1 on 2024-09-07 03:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_form_created_at_alter_form_email_alter_form_msg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 7, 3, 9, 17, 34717)),
        ),
    ]
