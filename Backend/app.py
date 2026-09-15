from datetime import date, datetime
import secrets

from flask import Flask, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash

from database import get_db_connection

app = Flask(__name__)


def resposta_trilha(connection, trilha):
    avaliacoes = connection.execute("""
        SELECT a.id, u.nome, a.nota, a.comentario, a.data_avaliacao
        FROM avaliacoes a
        JOIN usuarios u ON a.usuario_id = u.id
        WHERE a.trilha_id = ?
        ORDER BY a.id DESC
    """, (trilha["id"],)).fetchall()

    return {
        "id": str(trilha["id"]),
        "nome": trilha["nome"],
        "localizacao": trilha["localizacao"],
        "imagem": trilha["imagem"],
        "dificuldade": trilha["dificuldade"],
        "distanciaKm": trilha["distancia_km"],
        "duracaoMin": trilha["duracao_min"],
        "descricao": trilha["descricao"],
        "tipoTerreno": trilha["tipo_terreno"],
        "melhorHorario": trilha["melhor_horario"],
        "detalhes": trilha["detalhes"],
        "avaliacoes": [
            {
                "id": str(a["id"]),
                "nome": a["nome"],
                "nota": a["nota"],
                "comentario": a["comentario"],
                "data": a["data_avaliacao"]
            } for a in avaliacoes
        ]
    }


def usuario_autenticado(connection):
    cabecalho = request.headers.get("Authorization", "")
    if not cabecalho.startswith("Bearer "):
        return None
    token = cabecalho[7:].strip()
    return connection.execute("""
        SELECT u.id, u.nome, u.email, u.tipo
        FROM sessoes s
        JOIN usuarios u ON s.usuario_id = u.id
        WHERE s.token = ?
    """, (token,)).fetchone()


def exigir_usuario(connection):
    usuario = usuario_autenticado(connection)
    if usuario is None:
        return None, (jsonify({"erro": "Autenticação necessária"}), 401)
    return usuario, None


def exigir_admin(connection):
    usuario, erro = exigir_usuario(connection)
    if erro:
        return None, erro
    if usuario["tipo"] != "ADMIN":
        return None, (jsonify({"erro": "Acesso permitido apenas para ADMIN"}), 403)
    return usuario, None


@app.route("/")
def home():
    return jsonify({"mensagem": "API funcionando!"})


@app.route("/usuarios", methods=["POST"])
def cadastrar_visitante():
    dados = request.get_json(silent=True) or {}
    if not all(dados.get(campo) for campo in ("nome", "email", "senha")):
        return jsonify({"erro": "nome, email e senha são obrigatórios"}), 400

    connection = get_db_connection()
    try:
        cursor = connection.execute("""
            INSERT INTO usuarios (nome, email, senha, tipo)
            VALUES (?, ?, ?, 'VISITANTE')
        """, (dados["nome"].strip(), dados["email"].strip().lower(), generate_password_hash(dados["senha"])))
        connection.commit()
        return jsonify({"id": cursor.lastrowid, "mensagem": "Visitante cadastrado com sucesso"}), 201
    except Exception as erro:
        if "UNIQUE constraint failed" in str(erro):
            return jsonify({"erro": "E-mail já cadastrado"}), 409
        raise
    finally:
        connection.close()


@app.route("/usuarios/admin", methods=["POST"])
def cadastrar_admin():
    connection = get_db_connection()
    _, erro = exigir_admin(connection)
    if erro:
        connection.close()
        return erro

    dados = request.get_json(silent=True) or {}
    if not all(dados.get(campo) for campo in ("nome", "email", "senha")):
        connection.close()
        return jsonify({"erro": "nome, email e senha são obrigatórios"}), 400
    try:
        cursor = connection.execute("""
            INSERT INTO usuarios (nome, email, senha, tipo)
            VALUES (?, ?, ?, 'ADMIN')
        """, (dados["nome"].strip(), dados["email"].strip().lower(), generate_password_hash(dados["senha"])))
        connection.commit()
        return jsonify({"id": cursor.lastrowid, "mensagem": "Administrador cadastrado com sucesso"}), 201
    except Exception as exc:
        if "UNIQUE constraint failed" in str(exc):
            return jsonify({"erro": "E-mail já cadastrado"}), 409
        raise
    finally:
        connection.close()


@app.route("/login", methods=["POST"])
def login():
    dados = request.get_json(silent=True) or {}
    email, senha = dados.get("email", "").strip().lower(), dados.get("senha", "")
    connection = get_db_connection()
    usuario = connection.execute("SELECT * FROM usuarios WHERE email = ?", (email,)).fetchone()

    if usuario is None or not check_password_hash(usuario["senha"], senha):
        connection.close()
        return jsonify({"erro": "E-mail ou senha inválidos"}), 401

    token = secrets.token_urlsafe(32)
    connection.execute("INSERT INTO sessoes (token, usuario_id, criado_em) VALUES (?, ?, ?)",
                       (token, usuario["id"], datetime.now().isoformat(timespec="seconds")))
    connection.commit()
    connection.close()
    return jsonify({
        "token": token,
        "usuario": {"id": usuario["id"], "nome": usuario["nome"], "email": usuario["email"], "tipo": usuario["tipo"]}
    })


@app.route("/trilhas", methods=["GET"])
def listar_trilhas():
    connection = get_db_connection()
    dificuldade = request.args.get("dificuldade")
    localizacao = request.args.get("localizacao")
    query = "SELECT * FROM trilhas WHERE 1=1"
    parametros = []
    if dificuldade:
        query += " AND dificuldade = ?"
        parametros.append(dificuldade)
    if localizacao:
        query += " AND localizacao LIKE ?"
        parametros.append(f"%{localizacao}%")
    trilhas = connection.execute(query, parametros).fetchall()
    resultado = [resposta_trilha(connection, trilha) for trilha in trilhas]
    connection.close()
    return jsonify(resultado)


@app.route("/trilhas/<int:id>", methods=["GET"])
def detalhar_trilha(id):
    connection = get_db_connection()
    trilha = connection.execute("SELECT * FROM trilhas WHERE id = ?", (id,)).fetchone()
    if trilha is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    resultado = resposta_trilha(connection, trilha)
    connection.close()
    return jsonify(resultado)


@app.route("/trilhas", methods=["POST"])
def criar_trilha():
    connection = get_db_connection()
    _, erro = exigir_admin(connection)
    if erro:
        connection.close()
        return erro
    dados = request.get_json(silent=True) or {}
    if not all(dados.get(c) for c in ("nome", "localizacao", "dificuldade")):
        connection.close()
        return jsonify({"erro": "nome, localizacao e dificuldade são obrigatórios"}), 400
    try:
        cursor = connection.execute("""
            INSERT INTO trilhas (nome, localizacao, dificuldade, distancia_km, duracao_min,
            descricao, tipo_terreno, melhor_horario, detalhes, imagem)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (dados["nome"], dados["localizacao"], dados["dificuldade"], dados.get("distanciaKm"),
              dados.get("duracaoMin"), dados.get("descricao"), dados.get("tipoTerreno"),
              dados.get("melhorHorario"), dados.get("detalhes"), dados.get("imagem")))
        connection.commit()
        return jsonify({"id": cursor.lastrowid, "mensagem": "Trilha cadastrada com sucesso"}), 201
    except Exception as exc:
        if "UNIQUE constraint failed" in str(exc):
            return jsonify({"erro": "Trilha já cadastrada nessa localização"}), 409
        raise
    finally:
        connection.close()


@app.route("/trilhas/<int:id>", methods=["PUT"])
def editar_trilha(id):
    connection = get_db_connection()
    _, erro = exigir_admin(connection)
    if erro:
        connection.close()
        return erro
    atual = connection.execute("SELECT * FROM trilhas WHERE id = ?", (id,)).fetchone()
    if atual is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    dados = request.get_json(silent=True) or {}
    mapa = {"nome":"nome", "localizacao":"localizacao", "dificuldade":"dificuldade", "distanciaKm":"distancia_km",
            "duracaoMin":"duracao_min", "descricao":"descricao", "tipoTerreno":"tipo_terreno",
            "melhorHorario":"melhor_horario", "detalhes":"detalhes", "imagem":"imagem"}
    campos, valores = [], []
    for chave_json, coluna in mapa.items():
        if chave_json in dados:
            campos.append(f"{coluna} = ?")
            valores.append(dados[chave_json])
    if not campos:
        connection.close()
        return jsonify({"erro": "Nenhum campo enviado para atualização"}), 400
    valores.append(id)
    connection.execute(f"UPDATE trilhas SET {', '.join(campos)} WHERE id = ?", valores)
    connection.commit()
    connection.close()
    return jsonify({"mensagem": "Trilha atualizada com sucesso"})


@app.route("/trilhas/<int:id>/avaliacoes", methods=["POST"])
def criar_avaliacao(id):
    connection = get_db_connection()
    usuario, erro = exigir_usuario(connection)
    if erro:
        connection.close()
        return erro
    if connection.execute("SELECT id FROM trilhas WHERE id = ?", (id,)).fetchone() is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    dados = request.get_json(silent=True) or {}
    nota = dados.get("nota")
    if not isinstance(nota, int) or nota < 1 or nota > 5:
        connection.close()
        return jsonify({"erro": "nota deve ser um número inteiro entre 1 e 5"}), 400
    try:
        connection.execute("""
            INSERT INTO avaliacoes (trilha_id, usuario_id, nota, comentario, data_avaliacao)
            VALUES (?, ?, ?, ?, ?)
        """, (id, usuario["id"], nota, dados.get("comentario"), date.today().isoformat()))
        connection.commit()
        return jsonify({"mensagem": "Avaliação cadastrada com sucesso"}), 201
    except Exception as exc:
        if "UNIQUE constraint failed" in str(exc):
            return jsonify({"erro": "Você já avaliou esta trilha"}), 409
        raise
    finally:
        connection.close()


@app.route("/trilhas/<int:id>/realizar", methods=["POST"])
def registrar_trilha_realizada(id):
    connection = get_db_connection()
    usuario, erro = exigir_usuario(connection)
    if erro:
        connection.close()
        return erro
    if connection.execute("SELECT id FROM trilhas WHERE id = ?", (id,)).fetchone() is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    dados = request.get_json(silent=True) or {}
    data_realizacao = dados.get("dataRealizacao") or date.today().isoformat()
    connection.execute("""
        INSERT OR IGNORE INTO trilhas_realizadas (usuario_id, trilha_id, data_realizacao)
        VALUES (?, ?, ?)
    """, (usuario["id"], id, data_realizacao))
    connection.commit()
    connection.close()
    return jsonify({"mensagem": "Trilha registrada como realizada"}), 201


@app.route("/trilhas/<int:id>/eventos", methods=["GET"])
def listar_eventos(id):
    connection = get_db_connection()
    if connection.execute("SELECT id FROM trilhas WHERE id = ?", (id,)).fetchone() is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    eventos = connection.execute("SELECT * FROM eventos WHERE trilha_id = ? ORDER BY data, horario", (id,)).fetchall()
    connection.close()
    return jsonify([{"id": str(e["id"]), "trilhaId": str(e["trilha_id"]), "nome": e["nome"],
                     "descricao": e["descricao"], "data": e["data"], "horario": e["horario"]} for e in eventos])


@app.route("/eventos", methods=["POST"])
def criar_evento():
    connection = get_db_connection()
    _, erro = exigir_admin(connection)
    if erro:
        connection.close()
        return erro
    dados = request.get_json(silent=True) or {}
    if not all(dados.get(c) for c in ("trilhaId", "nome", "data")):
        connection.close()
        return jsonify({"erro": "trilhaId, nome e data são obrigatórios"}), 400
    if connection.execute("SELECT id FROM trilhas WHERE id = ?", (dados["trilhaId"],)).fetchone() is None:
        connection.close()
        return jsonify({"erro": "Trilha não encontrada"}), 404
    cursor = connection.execute("""
        INSERT INTO eventos (trilha_id, nome, descricao, data, horario)
        VALUES (?, ?, ?, ?, ?)
    """, (dados["trilhaId"], dados["nome"], dados.get("descricao"), dados["data"], dados.get("horario")))
    connection.commit()
    connection.close()
    return jsonify({"id": cursor.lastrowid, "mensagem": "Evento cadastrado com sucesso"}), 201


@app.route("/eventos/<int:id>", methods=["PUT"])
def editar_evento(id):
    connection = get_db_connection()
    _, erro = exigir_admin(connection)
    if erro:
        connection.close()
        return erro
    if connection.execute("SELECT id FROM eventos WHERE id = ?", (id,)).fetchone() is None:
        connection.close()
        return jsonify({"erro": "Evento não encontrado"}), 404
    dados = request.get_json(silent=True) or {}
    mapa = {"trilhaId":"trilha_id", "nome":"nome", "descricao":"descricao", "data":"data", "horario":"horario"}
    campos, valores = [], []
    for chave_json, coluna in mapa.items():
        if chave_json in dados:
            campos.append(f"{coluna} = ?")
            valores.append(dados[chave_json])
    if not campos:
        connection.close()
        return jsonify({"erro": "Nenhum campo enviado para atualização"}), 400
    valores.append(id)
    connection.execute(f"UPDATE eventos SET {', '.join(campos)} WHERE id = ?", valores)
    connection.commit()
    connection.close()
    return jsonify({"mensagem": "Evento atualizado com sucesso"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
