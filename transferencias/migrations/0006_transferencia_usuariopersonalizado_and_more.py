# Generated by Django 5.0 on 2023-12-11 22:17

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transferencias', '0005_sucursal_remove_usuariopersonalizado_user_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Transferencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='UsuarioPersonalizado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_de_cuenta', models.CharField(choices=[('dolares', 'Cuenta en Dólares'), ('pesos', 'Cuenta en Pesos Argentinos')], default='pesos', max_length=20)),
                ('limite_tarjeta', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('transferencias', models.JSONField(default=dict)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='cliente',
            name='user',
        ),
        migrations.RemoveField(
            model_name='prestamo',
            name='cliente',
        ),
        migrations.RemoveField(
            model_name='cuenta',
            name='cliente',
        ),
        migrations.RemoveField(
            model_name='tarjeta',
            name='cliente',
        ),
        migrations.DeleteModel(
            name='Sucursal',
        ),
        migrations.RemoveField(
            model_name='cuenta',
            name='tipo',
        ),
        migrations.AddField(
            model_name='cuenta',
            name='tipo_cuenta',
            field=models.CharField(choices=[('dolares', 'Cuenta en Dólares'), ('pesos', 'Cuenta en Pesos Argentinos')], default='pesos', max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cuenta',
            name='saldo',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='transferencia',
            name='cuenta_destino',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transferencias_recibidas', to='transferencias.cuenta'),
        ),
        migrations.AddField(
            model_name='transferencia',
            name='cuenta_origen',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transferencias_realizadas', to='transferencias.cuenta'),
        ),
        migrations.DeleteModel(
            name='Prestamo',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='Tarjeta',
        ),
    ]
