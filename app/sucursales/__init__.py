# __init__.py

from flask import Flask, request, jsonify
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)
auth = HTTPBasicAuth()

usuarios = {
    "usuario1": "clave1",
    "usuario2": "clave2",
    "usuario3": "clave3"
}

sucursales = {
    "sucursal1": {"nombre": "Sucursal A", "ubicacion": "Dirección A"},
    "sucursal2": {"nombre": "Sucursal B", "ubicacion": "Dirección B"}
}

@auth.verify_password
def verificar_password(username, password):
    if username in usuarios and usuarios[username] == password:
        return username

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Ruta no encontrada"}), 404
