# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-11-01 19:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0022_rmpinfo_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rmpinfo',
            name='rating',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
