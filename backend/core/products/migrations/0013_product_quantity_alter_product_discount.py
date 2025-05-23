# Generated by Django 5.1.7 on 2025-03-17 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_alter_product_discount_alter_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.PositiveBigIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='discount',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
