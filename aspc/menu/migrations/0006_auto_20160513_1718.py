# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-13 17:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0005_auto_20160507_2148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image_url',
            field=models.URLField(blank=True, max_length=1000, null=True),
        ),
    ]