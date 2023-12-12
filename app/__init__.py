from flask import Flask, jsonify  
from flask_httpauth import HTTPBasicAuth
from .clientes import clientes_bp

app = Flask(__name__)
auth = HTTPBasicAuth()

# Lista de usuarios registrados con sus contraseñas, pongo 3
usuarios = {
    "usuario1": "clave1",
    "usuario2": "clave2",
    "usuario3": "clave3"
}

@auth.verify_password
def verificar_password(username, password):
    if username in usuarios and usuarios[username] == password:
        return username

app.register_blueprint(clientes_bp, url_prefix='/api/clientes')

@app.route('/api/ruta_protegida')
@auth.login_required
def ruta_protegida():
    return jsonify({"mensaje": "Acceso permitido"})

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Ruta no encontrada"}), 404

if __name__ == '__main__':
    app.run(debug=True)
