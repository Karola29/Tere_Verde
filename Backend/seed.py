from database import get_db_connection
from werkzeug.security import generate_password_hash

connection = get_db_connection()

usuarios = [
    ("Marina Alves", "marina@email.com", generate_password_hash("123456"), "VISITANTE"),
    ("Pedro Costa", "pedro@email.com", generate_password_hash("123456"), "VISITANTE"),
    ("Juliana Ramos", "juliana@email.com", generate_password_hash("123456"), "VISITANTE"),
    ("Administrador", "admin@tereverde.com", generate_password_hash("admin123"), "ADMIN")
]

connection.executemany("""
    INSERT OR IGNORE INTO usuarios (
        nome,
        email,
        senha,
        tipo
    )
    VALUES (?, ?, ?, ?)
""", usuarios)

# Atualiza as senhas dos usuários de demonstração caso o banco já existisse antes do hash.
for nome, email, senha_hash, tipo in usuarios:
    connection.execute(
        "UPDATE usuarios SET nome = ?, senha = ?, tipo = ? WHERE email = ?",
        (nome, senha_hash, tipo, email)
    )

trilhas = [
    (
        "Trilha Suspensa",
        "Praça da Barragem",
        "Fácil",
        1.3,
        60,
        "Uma das grandes atrações do PARNASO, com piso de madeira e corrimão que permite acesso até a cadeirantes. Construída sobre um aqueduto do início do século XX, corta um trecho de Mata Atlântica em nível elevado, permitindo observar a copa das árvores de perto.",
        "Piso de madeira com corrimão",
        "Manhã ou fim de tarde",
        None,
        "trilha-suspensa.jpg"
    ),

    (
        "Estrada da Barragem",
        "PARNASO - Sede Teresópolis",
        "Fácil",
        3.0,
        120,
        "Estrada calçada em paralelepípedo que dá acesso a todas as trilhas da Sede Teresópolis. Ideal para caminhadas de lazer, conta com placas indicativas a cada 500 m, vários mirantes, recantos para descanso, duchas e cascatas. Termina na Praça da Barragem, ponto de captação de água da cidade.",
        "Paralelepípedo, trânsito liberado para automóveis",
        "Manhã",
        None,
        "estrada-barragem.jpg"
    ),

    (
        "Trilha Cartão Postal",
        "PARNASO - Sede Teresópolis",
        "Moderada",
        1.2,
        120,
        "Com acesso pela Estrada da Barragem, cruza área de floresta com belas vistas da montanha e dá acesso a um mirante voltado para a Serra dos Órgãos, com um ângulo único do Dedo de Deus em meio à floresta. No caminho é possível observar grandes árvores, como o jequitibá.",
        "Trilha de mata, com trechos de subida",
        "Manhã ou fim de tarde",
        None,
        "trilha-cartao-postal.jpg"
    ),

    (
        "Trilha Pedra Alpina",
        "Sede Santa Rita do Parque Natural Municipal Montanhas de Teresópolis, no segundo distrito da cidade",
        "Moderada",
        2.5,
        120,
        "Trilha com subida constante e trechos finais mais íngremes em terreno rochoso, que exigem atenção. O percurso leva a um cume aberto com vista panorâmica para as montanhas de Teresópolis, Petrópolis e Nova Friburgo.",
        "Subida constante, com trechos finais mais íngremes em terreno rochoso",
        "Manhã",
        "Funcionamento: de terça a domingo, das 8h às 17h, com fechamento às segundas-feiras. Entrada gratuita, sendo necessária identificação na entrada da Sede. Distância aproximada de 2 km a 3 km de percurso (ida). Visual: cume aberto com vista panorâmica para as montanhas de Teresópolis, Petrópolis e Nova Friburgo. Altitude máxima: 1.365 m.",
        "pedra-alpina.jpg"
    ),

    (
        "Pedra do Sino",
        "PARNASO - Sede Teresópolis",
        "Difícil",
        22.0,
        300,
        "Ponto mais alto da Serra dos Órgãos, com 2.275 metros de altitude. Uma das trilhas mais tradicionais da cidade, faz parte da Travessia Petrópolis x Teresópolis. Apesar da distância considerável, não apresenta grandes dificuldades técnicas. A dica é pegar o pôr do sol no cume.",
        "Trilha extensa, zigue-zague em subida",
        "Início da manhã (para chegar ao cume à tarde)",
        None,
        "pedra-sino.jpg"
    )
]

connection.executemany("""
    INSERT OR IGNORE INTO trilhas (
        nome,
        localizacao,
        dificuldade,
        distancia_km,
        duracao_min,
        descricao,
        tipo_terreno,
        melhor_horario,
        detalhes,
        imagem
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
""", trilhas)

avaliacoes = [
    (
        1,  # trilha_id - Trilha Suspensa
        1,  # usuario_id - Marina Alves
        5,
        "Trilha linda e muito acessível, levei minha mãe de 70 anos e ela adorou!",
        "2026-08-31"
    ),
    (
        1,  # Trilha Suspensa
        2,  # Pedro Costa
        4,
        "Ótima vista da mata, só achei um pouco cheia no fim de semana.",
        "2026-08-17"
    ),
    (
        1,  # Trilha Suspensa
        3,  # Juliana Ramos
        5,
        "Perfeita para ir com crianças. Recomendo muito!",
        "2026-08-17"
    )
]

connection.executemany("""
    INSERT OR IGNORE INTO avaliacoes (
        trilha_id,
        usuario_id,
        nota,
        comentario,
        data_avaliacao
    )
    VALUES (?, ?, ?, ?, ?)
""", avaliacoes)

eventos = [
    (1, "Caminhada guiada na Trilha Suspensa", "Caminhada de demonstração para o MVP.", "2026-09-20", "09:00"),
    (3, "Observação da Serra dos Órgãos", "Encontro de demonstração no Cartão Postal.", "2026-09-27", "08:30")
]

for evento in eventos:
    existe = connection.execute(
        "SELECT id FROM eventos WHERE trilha_id = ? AND nome = ? AND data = ?",
        (evento[0], evento[1], evento[3])
    ).fetchone()
    if not existe:
        connection.execute(
            "INSERT INTO eventos (trilha_id, nome, descricao, data, horario) VALUES (?, ?, ?, ?, ?)",
            evento
        )

connection.commit()
connection.close()

print("Dados iniciais cadastrados com sucesso!")