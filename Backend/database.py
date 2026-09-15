import sqlite3


def get_db_connection():
    connection = sqlite3.connect("database.db")
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def criar_tabelas():
    connection = get_db_connection()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            tipo TEXT NOT NULL CHECK (tipo IN ('ADMIN', 'VISITANTE'))
        )
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS trilhas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            localizacao TEXT NOT NULL,
            dificuldade TEXT NOT NULL,
            distancia_km REAL,
            duracao_min INTEGER,
            descricao TEXT,
            tipo_terreno TEXT,
            melhor_horario TEXT,
            detalhes TEXT,
            imagem TEXT,
            UNIQUE (nome, localizacao)
        )
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS avaliacoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            trilha_id INTEGER NOT NULL,
            usuario_id INTEGER NOT NULL,
            nota INTEGER NOT NULL CHECK (nota BETWEEN 1 AND 5),
            comentario TEXT,
            data_avaliacao TEXT,
            FOREIGN KEY (trilha_id) REFERENCES trilhas(id),
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        )
    """)
    connection.execute("""
        CREATE UNIQUE INDEX IF NOT EXISTS idx_avaliacoes_trilha_usuario
        ON avaliacoes (trilha_id, usuario_id)
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            trilha_id INTEGER NOT NULL,
            nome TEXT NOT NULL,
            descricao TEXT,
            data TEXT,
            horario TEXT,
            FOREIGN KEY (trilha_id) REFERENCES trilhas(id)
        )
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS trilhas_realizadas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER NOT NULL,
            trilha_id INTEGER NOT NULL,
            data_realizacao TEXT,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
            FOREIGN KEY (trilha_id) REFERENCES trilhas(id)
        )
    """)
    connection.execute("""
        CREATE UNIQUE INDEX IF NOT EXISTS idx_trilha_realizada_usuario_trilha
        ON trilhas_realizadas (usuario_id, trilha_id)
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS sessoes (
            token TEXT PRIMARY KEY,
            usuario_id INTEGER NOT NULL,
            criado_em TEXT NOT NULL,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
        )
    """)

    connection.commit()
    connection.close()


criar_tabelas()
