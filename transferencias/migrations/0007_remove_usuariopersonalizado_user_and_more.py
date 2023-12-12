# Generated by Django 5.0 on 2023-12-11 23:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transferencias', '0006_transferencia_usuariopersonalizado_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuariopersonalizado',
            name='user',
        ),
        migrations.RemoveField(
            model_name='cuenta',
            name='tipo_cuenta',
        ),
        migrations.AddField(
            model_name='cuenta',
            name='nombre',
            field=models.CharField(default='Juan', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cuenta',
            name='saldo',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.CreateModel(
            name='Transferencias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now=True)),
                ('cantidad', models.DecimalField(decimal_places=2, max_digits=10)),
                ('destino', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transferencias_destino', to='transferencias.cuenta')),
                ('origen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transferencias_origen', to='transferencias.cuenta')),
            ],
        ),
        migrations.DeleteModel(
            name='Transferencia',
        ),
        migrations.DeleteModel(
            name='UsuarioPersonalizado',
        ),
    ]
