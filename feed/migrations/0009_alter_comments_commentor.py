# Generated by Django 3.2.5 on 2021-07-29 04:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_profile_user'),
        ('feed', '0008_comments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='commentor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.profile'),
        ),
    ]
