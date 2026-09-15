# 🌿 TERE VERDE

### Explore. Descubra. Preserve.

Aplicativo mobile desenvolvido como projeto final de faculdade para facilitar a descoberta e consulta de informações sobre trilhas e áreas naturais de **Teresópolis – RJ**.

---

## 📱 Sobre o projeto

O **Tere Verde** é uma aplicação mobile que tem como objetivo centralizar informações sobre trilhas de Teresópolis, permitindo que os usuários consultem dados como:

* 🥾 Nome e descrição das trilhas
* 📏 Distância
* ⏱️ Duração estimada
* ⚠️ Nível de dificuldade
* 📍 Localização
* 🔔 Avisos importantes
* ⭐ Avaliações e feedbacks
* 🔍 Filtros para facilitar a busca

O projeto é dividido em **Frontend Mobile**, **Backend/API** e **Banco de Dados**.

---

# 🏗️ Estrutura do projeto

```text
Tere-Verde/
│
├── Frontend/
│   ├── app/
│   ├── assets/
│   ├── components/
│   └── package.json
│
├── Backend/
│   ├── database.py
│   ├── seed.py
│   ├── app.py
│   └── ...
│
└── README.md
```

---

# 🛠️ Tecnologias

## Frontend

* React Native
* Expo
* Expo Router
* TypeScript

## Backend

* Python
* Flask
* API REST
* JSON

## Ferramentas

* Git
* GitHub
* Figma
* Postman
* Visual Studio Code

---

# 🚀 Como executar o projeto

Para executar o Tere Verde corretamente, é necessário **iniciar o Backend primeiro** e depois executar o Frontend.

A ordem é:

```text
🖥️ Backend
   ↓
🌐 API Flask
   ↓
📱 Frontend Mobile
   ↓
📲 Expo Go
```

---

# 🖥️ Como rodar o Backend

## 1. Entrar na pasta do Backend

Abra o terminal na pasta do projeto e entre no diretório do Backend:

```bash
cd Backend
```

---

## 2. Criar o ambiente virtual

Execute:

```bash
python -m venv venv
```

Isso cria um ambiente virtual Python para o projeto.

---

## 3. Ativar o ambiente virtual

No Windows:

```bash
venv\Scripts\activate
```

Após ativar, o terminal deverá apresentar algo parecido com:

```text
(venv) C:\...\Tere-Verde\Backend>
```

---

## 4. Instalar o Flask

Com o ambiente virtual ativado, execute:

```bash
pip install Flask
```

---

## 5. Criar o banco de dados

Execute:

```bash
python database.py
```

Esse comando executa a configuração/criação do banco de dados utilizada pelo projeto.

---

## 6. Inserir os dados iniciais

Execute:

```bash
python seed.py
```

O `seed.py` é responsável por inserir os dados iniciais necessários para o funcionamento do sistema.

---

## 7. Iniciar a API

Por último, execute:

```bash
python app.py
```

A API Flask será iniciada.

Mantenha esse terminal **aberto e executando** enquanto estiver utilizando o Frontend.

---

## 📋 Comandos completos do Backend

Depois de entrar na pasta `Backend`, os comandos são:

```bash
python -m venv venv
venv\Scripts\activate
pip install Flask
python database.py
python seed.py
python app.py
```

---

# 📱 Como rodar o Frontend

Depois que o Backend estiver funcionando, abra **outro terminal**.

## 1. Entrar na pasta Frontend

```bash
cd Frontend
```

---

## 2. Instalar as dependências

Execute:

```bash
npm install
```

---

## 3. Corrigir as dependências do Expo

Execute:

```bash
npx expo install --fix
```

---

## 4. Iniciar o Expo

Execute:

```bash
npx expo start
```

Após executar o comando, será exibido um **QR Code no terminal**.

---

# 📲 Abrir o aplicativo no celular

## 1. Instalar o Expo Go

Instale o **Expo Go** no celular.

### Android

[Baixar Expo Go 57.0.9 (APK)](https://github.com/expo/expo-go-releases/releases/download/Expo-Go-57.0.9/Expo-Go-57.0.9.apk?utm_source=chatgpt.com)

---

## 2. Escanear o QR Code

Com o Expo Go instalado:

1. Abra o **Expo Go** no celular.
2. Escaneie o **QR Code** exibido no terminal.
3. Aguarde o carregamento.
4. O aplicativo **Tere Verde** será aberto.

---

# ⚠️ Importante

Para o Frontend conseguir se comunicar corretamente com o computador durante o desenvolvimento, o **celular e o computador devem estar conectados à mesma rede Wi-Fi**.

```text
📱 Celular
     │
     │ Wi-Fi
     ↓
📶 Roteador
     ↑
     │ Wi-Fi
     │
💻 Computador
     │
     ↓
🌐 Backend / API
```

Além disso, o **Backend deve estar rodando antes do Frontend**.

---

# 🔄 Ordem completa para executar

### 🖥️ Terminal 1 — Backend

```bash
cd Backend

python -m venv venv

venv\Scripts\activate

pip install Flask

python database.py

python seed.py

python app.py
```

**Não feche esse terminal.**

---

### 💻 Terminal 2 — Frontend

```bash
cd Frontend

npm install

npx expo install --fix

npx expo start
```

---

### 📱 Celular

```text
Abrir Expo Go
       ↓
Escanear QR Code
       ↓
🌿 Tere Verde
```

---

# 🌐 Arquitetura

A comunicação do projeto segue a estrutura:

```text
┌───────────────────┐
│   📱 FRONTEND     │
│   React Native    │
│      + Expo       │
└─────────┬─────────┘
          │
          │ HTTP / JSON
          ↓
┌───────────────────┐
│   🌐 BACKEND      │
│      Flask        │
│    Python         │
└─────────┬─────────┘
          │
          ↓
┌───────────────────┐
│ 🗄️ BANCO DE DADOS │
└───────────────────┘
```

---

# 🌿 Funcionalidades

* 🏠 Página inicial
* 🥾 Lista de trilhas
* 📖 Detalhes das trilhas
* ⚠️ Avisos
* ⭐ Feedbacks e avaliações
* 🔍 Filtros
* 👤 Perfil do usuário
* 🔐 Autenticação

---

# 🔮 Melhorias futuras

Funcionalidades que poderão ser adicionadas em versões futuras:

* 🗺️ Mapa interativo das trilhas
* 📍 GPS em tempo real
* 🧭 Navegação durante a trilha
* 📴 Mapas offline
* ⭐ Trilhas favoritas
* 🏆 Conquistas e medalhas
* 📜 Histórico de trilhas realizadas
* 🌦️ Informações climáticas
* 🔔 Notificações
* 📷 Upload de fotos
* 🚨 Sistema de emergência

---

# 👥 Equipe

### 📱 Mobile — Luísa

Responsável pelo desenvolvimento do aplicativo mobile, telas, componentes, navegação e integração com a API.

### 🖥️ Backend — Dani

Responsável pelo desenvolvimento da API Flask, endpoints, banco de dados, autenticação e regras de negócio.

### 🔗 Integração / Produto — Anna

Responsável pelo fluxo do usuário, requisitos, organização dos dados, testes de integração e documentação.

---

# 📚 Documentação

```text
docs/
├── requisitos.md
├── fluxo_usuario.md
├── telas.md
├── api.md
├── testes.md
└── dados_trilhas.xlsx
```

---

# 🌱 TERE VERDE

### Explore. Descubra. Preserve.

Projeto acadêmico desenvolvido para promover o acesso organizado a informações sobre trilhas e áreas naturais de **Teresópolis – RJ**.

