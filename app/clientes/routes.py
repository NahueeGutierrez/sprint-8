from flask import jsonify, request
from flask_httpauth import HTTPBasicAuth
from . import clientes_bp

auth = HTTPBasicAuth()

datos_clientes = {
    "cliente1": {"nombre": "Cliente 1", "edad": 30, "saldo": 10000.0},
    "cliente2": {"nombre": "Cliente 2", "edad": 25, "saldo": 15000.0},
    "cliente3": {"nombre": "Cliente 3", "edad": 25, "saldo": 10500.0}
}

datos_cuentas = {
    "cuenta1": {"tipo": "Cuenta Corriente", "saldo": 5000.0},
    "cuenta2": {"tipo": "Cuenta de Ahorros", "saldo": 10000.0}
}

datos_prestamos = {
    "cliente1": {"tipo": "Hipoteca", "total": 200000.0},
    "cliente2": {"tipo": "Préstamo Automotriz", "total": 15000.0}
}

@clientes_bp.route('/<id_cliente>', methods=['GET'])
@auth.login_required
def obtener_datos_cliente(id_cliente):
    if auth.current_user() != id_cliente:
        return jsonify({"error": "Acceso no autorizado"}), 403

    if id_cliente in datos_clientes:
        return jsonify(datos_clientes[id_cliente])
    else:
        return jsonify({"error": "Cliente no encontrado"}), 404

def tiene_acceso_a_cuenta(id_cliente, id_cuenta):
    relaciones_cliente_cuenta = {
        "cliente1": ["cuenta1", "cuenta2"],
        "cliente2": ["cuenta3"],
        "cliente3": ["cuenta1"]
    }

    return id_cuenta in relaciones_cliente_cuenta.get(id_cliente, [])

@clientes_bp.route('/cuentas/<id_cuenta>/saldo', methods=['GET'])
@auth.login_required
def obtener_saldo_cuenta(id_cuenta):
    if not tiene_acceso_a_cuenta(auth.current_user(), id_cuenta):
        return jsonify({"error": "Acceso no autorizado"}), 403

    if id_cuenta in datos_cuentas:
        return jsonify({"tipo": datos_cuentas[id_cuenta]["tipo"], "saldo": datos_cuentas[id_cuenta]["saldo"]})
    else:
        return jsonify({"error": "Cuenta no encontrada"}), 404

@clientes_bp.route('/<id_cliente>/prestamos', methods=['GET'])
@auth.login_required
def obtener_prestamos_cliente(id_cliente):
    if id_cliente in datos_prestamos:
        return jsonify({"tipo": datos_prestamos[id_cliente]["tipo"], "total": datos_prestamos[id_cliente]["total"]})
    else:
        return jsonify({"error": "Cliente no tiene préstamos registrados"}), 404

def obtener_prestamos_por_sucursal(id_sucursal):
    prestamos_por_sucursal = []

    for cliente, prestamo_info in datos_prestamos.items():
        if "sucursal" in prestamo_info and prestamo_info["sucursal"] == id_sucursal:
            prestamos_por_sucursal.append({"cliente": cliente, "tipo": prestamo_info["tipo"], "total": prestamo_info["total"]})

    return prestamos_por_sucursal

@clientes_bp.route('/sucursales/<id_sucursal>/prestamos', methods=['GET'])
@auth.login_required
def obtener_prestamos_sucursal(id_sucursal):
    prestamos_sucursal = obtener_prestamos_por_sucursal(id_sucursal)
    if prestamos_sucursal:
        return jsonify(prestamos_sucursal)
    else:
        return jsonify({"error": "No hay préstamos registrados para esta sucursal"}), 404
