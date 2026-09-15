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
│   ├── ...
│   └── package.json
│
├── Backend/
│   ├── ...
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
* JavaScript/TypeScript

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

Para executar o aplicativo corretamente, é necessário **iniciar o Backend antes do Frontend**.

## 1. 📱 Instalar o Expo Go

No celular Android, instale o **Expo Go**.

### Download do APK

[Baixar Expo Go 57.0.9](https://github.com/expo/expo-go-releases/releases/download/Expo-Go-57.0.9/Expo-Go-57.0.9.apk?utm_source=chatgpt.com)

> **Observação:** o link acima é o APK utilizado atualmente pelo projeto. Caso o projeto passe a utilizar outra versão do Expo Go, atualize este link.

---

# 2. 🖥️ Iniciar o Backend

Antes de executar o aplicativo, é necessário iniciar o **Backend/API**.

Entre na pasta do Backend:

```bash
cd Backend
```

Depois, siga as instruções específicas do README/documentação do Backend para iniciar a API.

O Backend deve estar funcionando antes de iniciar o Frontend.

### Fluxo:

```text
Backend
   ↓
API Flask
   ↓
Frontend Mobile
```

---

# 3. 📂 Entrar na pasta Frontend

Depois que o Backend estiver funcionando, abra outro terminal e entre na pasta:

```bash
cd Frontend
```

---

# 4. 📦 Instalar as dependências

Dentro da pasta `Frontend`, execute:

```bash
npm install
```

Esse comando instala todas as dependências necessárias para executar o aplicativo.

---

# 5. 🔧 Corrigir/atualizar dependências do Expo

Após instalar as dependências, execute:

```bash
npx expo install --fix
```

Esse comando verifica e ajusta as versões das dependências para serem compatíveis com a versão do Expo utilizada no projeto.

---

# 6. ▶️ Iniciar o Frontend

Agora execute:

```bash
npx expo start
```

O Expo iniciará o servidor de desenvolvimento.

No terminal será exibido um **QR Code**.

Exemplo:

```text
› Metro waiting on exp://192.168.x.x:8081

› Scan the QR code above with Expo Go
```

---

# 7. 📲 Abrir o aplicativo no celular

Com o **Expo Go instalado no celular**:

1. Abra o aplicativo **Expo Go**.
2. Utilize a opção para escanear o QR Code.
3. Escaneie o QR Code exibido no terminal.
4. Aguarde o carregamento do projeto.
5. O **Tere Verde** será aberto no celular.

---

# ⚠️ Importante: conexão com o computador

Para o celular conseguir acessar o servidor de desenvolvimento, normalmente o **computador e o celular precisam estar na mesma rede Wi-Fi**.

Exemplo:

```text
📱 Celular
   │
   │ Wi-Fi
   │
📶 Roteador
   │
   │ Wi-Fi
   │
💻 Computador
```

Se o QR Code for escaneado e o aplicativo não conseguir carregar, verifique primeiro se o celular e o computador estão conectados à mesma rede.

---

# 🔄 Resumo rápido

Para executar o projeto:

### 1️⃣ Instale o Expo Go

Baixe e instale o APK no celular.

### 2️⃣ Inicie o Backend

O Backend deve estar funcionando primeiro.

### 3️⃣ Entre no Frontend

```bash
cd Frontend
```

### 4️⃣ Instale as dependências

```bash
npm install
```

### 5️⃣ Ajuste as dependências do Expo

```bash
npx expo install --fix
```

### 6️⃣ Inicie o projeto

```bash
npx expo start
```

### 7️⃣ Escaneie o QR Code

Abra o **Expo Go** no celular e escaneie o QR Code mostrado no terminal.

---

# 📋 Comandos completos

Se o Backend já estiver configurado e funcionando:

```bash
cd Frontend
npm install
npx expo install --fix
npx expo start
```

Depois:

```text
📱 Abrir Expo Go
       ↓
📷 Escanear QR Code
       ↓
🌿 Tere Verde
```

---

# 👥 Equipe

### 📱 Mobile — Luísa

Responsável pelo desenvolvimento do aplicativo mobile, telas, componentes, navegação e integração com a API.

### 🖥️ Backend — Dani

Responsável pelo desenvolvimento da API Flask, endpoints, banco de dados, autenticação e regras de negócio.

### 🔗 Integração / Produto — Anna

Responsável pelo fluxo do usuário, requisitos, organização dos dados, testes de integração e documentação.

---

# 🌿 Funcionalidades previstas

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

Algumas funcionalidades poderão ser adicionadas em versões futuras:

* 🗺️ Mapa interativo
* 📍 GPS em tempo real
* 🧭 Navegação durante a trilha
* 📴 Mapas offline
* ⭐ Trilhas favoritas
* 🏆 Conquistas e medalhas
* 📜 Histórico de trilhas
* 🌦️ Informações climáticas
* 🔔 Notificações
* 📷 Upload de fotos
* 🚨 Sistema de emergência

---

# 📚 Documentação

A documentação do projeto poderá incluir:

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

**Explore. Descubra. Preserve.**

Projeto acadêmico desenvolvido para promover o acesso organizado a informações sobre trilhas e áreas naturais de Teresópolis – RJ.
