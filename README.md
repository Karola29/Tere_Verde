# 🌿 TERE VERDE

### Explore. Descubra. Preserve.

**Projeto Final de Faculdade**
Aplicativo mobile para exploração das trilhas de Teresópolis – RJ

---

## 1. Sobre o projeto

O **Tere Verde** é um aplicativo mobile voltado para a exploração das trilhas e belezas naturais de Teresópolis, Rio de Janeiro.

A proposta é reunir em uma única plataforma informações que auxiliem moradores e visitantes a conhecer, planejar e explorar trilhas de forma mais simples, organizada e consciente.

---

## 2. Objetivo

O principal objetivo do Tere Verde é facilitar o acesso a informações sobre trilhas e áreas naturais de Teresópolis, oferecendo recursos para descoberta, planejamento e consulta das condições dos percursos.

### Objetivos específicos

* Centralizar informações sobre trilhas.
* Apresentar imagens, descrições e detalhes dos locais.
* Informar distância, duração estimada e nível de dificuldade.
* Disponibilizar avisos e alertas importantes.
* Permitir avaliações e feedbacks dos usuários.
* Facilitar a busca e descoberta de trilhas.
* Incentivar o turismo responsável e a valorização das áreas naturais.

---

## 3. Problema

Informações sobre trilhas podem estar espalhadas em diferentes sites, redes sociais, aplicativos e relatos de visitantes.

Isso dificulta a consulta de dados como localização, distância, duração, dificuldade, condições do local e avisos.

O **Tere Verde** propõe centralizar essas informações em uma experiência mobile única, facilitando o acesso e a organização dos dados das trilhas.

---

## 4. Público-alvo

* Praticantes de trilhas.
* Pessoas interessadas em ecoturismo.
* Turistas que visitam Teresópolis.
* Moradores da região.
* Pessoas que procuram atividades ao ar livre.
* Aventureiros iniciantes e experientes.

---

## 5. Proposta do aplicativo

A experiência do usuário será baseada em três etapas:

### 🔎 DESCOBRIR

Encontrar trilhas e conhecer suas características.

### 🥾 PLANEJAR

Consultar informações como dificuldade, distância, duração, localização e avisos.

### 🌿 EXPLORAR

Utilizar as informações disponíveis para realizar o percurso com mais conhecimento e consciência.

---

# 6. Requisitos funcionais

Os requisitos funcionais representam as **funções que o sistema deve realizar**.

| ID       | Requisito             | Descrição                                                                           |
| -------- | --------------------- | ----------------------------------------------------------------------------------- |
| **RF01** | Cadastro de usuário   | Permitir que novos usuários criem uma conta.                                        |
| **RF02** | Login                 | Permitir que o usuário acesse o aplicativo por meio de autenticação.                |
| **RF03** | Visualizar trilhas    | Permitir visualizar a lista de trilhas disponíveis.                                 |
| **RF04** | Pesquisar trilhas     | Permitir localizar trilhas por meio de pesquisa.                                    |
| **RF05** | Filtrar trilhas       | Permitir filtrar trilhas por características como dificuldade, distância e duração. |
| **RF06** | Visualizar detalhes   | Apresentar informações completas sobre uma trilha selecionada.                      |
| **RF07** | Visualizar avisos     | Permitir consultar avisos e informações importantes relacionados às trilhas.        |
| **RF08** | Avaliar trilhas       | Permitir que usuários registrem avaliações e feedbacks.                             |
| **RF09** | Visualizar feedbacks  | Permitir consultar avaliações e comentários de outros usuários.                     |
| **RF10** | Gerenciar informações | Permitir o gerenciamento das informações das trilhas por usuários autorizados.      |
| **RF11** | Perfil                | Permitir visualizar e gerenciar informações do usuário.                             |

---

# 7. Requisitos não funcionais

Os requisitos não funcionais representam **características de qualidade, segurança, desempenho e funcionamento do sistema**.

| ID        | Requisito        | Descrição                                                                                           |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| **RNF01** | Usabilidade      | O aplicativo deve apresentar uma interface simples e fácil de utilizar.                             |
| **RNF02** | Responsividade   | As telas devem se adaptar adequadamente aos dispositivos compatíveis.                               |
| **RNF03** | Desempenho       | O aplicativo deve apresentar as informações sem atrasos desnecessários.                             |
| **RNF04** | Segurança        | Os dados de autenticação e informações dos usuários devem ser tratados de forma segura.             |
| **RNF05** | Disponibilidade  | O sistema deve apresentar mensagens adequadas quando a API estiver indisponível.                    |
| **RNF06** | Manutenibilidade | O código deve ser organizado para facilitar futuras alterações e manutenção.                        |
| **RNF07** | Compatibilidade  | O aplicativo deve funcionar no ambiente mobile definido para o projeto.                             |
| **RNF08** | Comunicação      | A comunicação entre Frontend e Backend deve utilizar requisições HTTP e dados estruturados em JSON. |

---

# 8. Escopo do projeto

O escopo da primeira versão do **Tere Verde** está concentrado na consulta e organização de informações sobre trilhas de Teresópolis.

### Dentro do escopo

* Cadastro de usuários.
* Login e autenticação.
* Visualização de trilhas.
* Pesquisa e filtros.
* Consulta de detalhes das trilhas.
* Consulta de avisos.
* Avaliações e feedbacks.
* Perfil do usuário.
* Comunicação entre aplicativo e API.
* Armazenamento das informações no banco de dados.
* Gerenciamento das informações por usuários autorizados.

### Fora do escopo da versão atual

Alguns recursos não fazem parte da primeira versão do aplicativo:

* 🗺️ Mapa interativo.
* 📍 GPS em tempo real.
* 🧭 Navegação durante a trilha.
* 📴 Mapas offline.
* 🌦️ Monitoramento climático em tempo real.
* 🚨 Sistema de emergência.
* 📷 Upload de fotos pelos usuários.
* 🏆 Sistema de conquistas e medalhas.
* 📜 Histórico automático de trilhas realizadas.
* 👥 Cadastro de novos administradores diretamente pelo administrador.

Esses recursos poderão ser avaliados e implementados em versões futuras.

---

# 9. Principais funcionalidades

| Funcionalidade        | Descrição                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- |
| 🏠 **Página inicial** | Trilhas em destaque, trilhas populares, avisos e acesso rápido às principais funcionalidades. |
| 🥾 **Trilhas**        | Lista de trilhas com nome, imagem, localização, descrição e características.                  |
| 📖 **Detalhes**       | Informações completas sobre cada trilha, incluindo distância, duração e dificuldade.          |
| ⚠️ **Avisos**         | Alertas sobre fechamento, manutenção, condições climáticas e pontos de atenção.               |
| ⭐ **Feedbacks**       | Avaliações, comentários e experiências compartilhadas pelos usuários.                         |
| 🔍 **Filtros**        | Busca por dificuldade, distância, duração, localização e avaliação.                           |
| 👤 **Perfil**         | Informações e dados do usuário.                                                               |
| 🔐 **Autenticação**   | Cadastro e login dos usuários.                                                                |

---

# 10. Fluxo principal do usuário

**Abrir aplicativo → Splash → Login/Cadastro → Home → Trilhas → Selecionar trilha → Detalhes da trilha → Avisos/Feedback → Explorar**

---

# 11. Estrutura das telas

| Tela         | Função                                          |
| ------------ | ----------------------------------------------- |
| **Splash**   | Apresentação e identidade visual do aplicativo. |
| **Login**    | Autenticação do usuário.                        |
| **Cadastro** | Criação de conta.                               |
| **Home**     | Página principal e acesso às funcionalidades.   |
| **Trilhas**  | Lista, pesquisa e filtros de trilhas.           |
| **Detalhes** | Informações completas da trilha.                |
| **Avisos**   | Alertas e informações importantes.              |
| **Feedback** | Avaliações e comentários.                       |
| **Perfil**   | Informações do usuário.                         |

---

# 12. Arquitetura do projeto

O sistema será dividido em três partes principais:

**Aplicativo Mobile**
↓
**HTTP / JSON**
↓
**API Flask**
↓
**Banco de Dados**

### MOBILE

Interface + Navegação

### API FLASK

Endpoints + Autenticação + Regras de negócio

### BANCO DE DADOS

Armazenamento das informações dos usuários, trilhas, avisos e feedbacks.

---

# 13. Divisão da equipe

### 📱 Mobile — Luísa

* Aprender o básico da tecnologia escolhida.
* Criar o projeto mobile.
* Desenvolver telas e componentes.
* Implementar navegação.
* Consumir a API.
* Integrar as funcionalidades do aplicativo.

### 🖥️ Backend — Dani

* Desenvolver a API utilizando Flask.
* Criar endpoints.
* Modelar o banco de dados.
* Implementar autenticação.
* Criar regras de negócio.
* Realizar testes das rotas.

### 🔗 Integração / Produto — Anna

* Modelar as telas e o fluxo do usuário.
* Definir requisitos e funcionalidades.
* Organizar os dados das trilhas.
* Realizar testes funcionais e de integração.
* Validar a comunicação Mobile ↔ API.
* Produzir e manter a documentação.

---

# 14. Dados das trilhas

Cada trilha poderá possuir informações como:

* ID e nome da trilha.
* Imagem principal.
* Descrição.
* Localização.
* Distância em quilômetros.
* Duração estimada.
* Nível de dificuldade.
* Altitude e características do percurso.
* Avisos.
* Avaliação.
* Feedbacks dos usuários.

---

# 15. Integração Mobile ↔ API

A comunicação entre o aplicativo e o backend será realizada por requisições HTTP, com dados estruturados em JSON.

A equipe de Integração/Produto deverá validar se os dados retornados pela API são corretamente exibidos no aplicativo.

| Endpoint                         | Finalidade                         |
| -------------------------------- | ---------------------------------- |
| **POST /login**                  | Autenticação do usuário.           |
| **GET /trilhas**                 | Lista as trilhas disponíveis.      |
| **GET /trilhas/{id}**            | Retorna os detalhes de uma trilha. |
| **GET /avisos**                  | Retorna avisos disponíveis.        |
| **GET /trilhas/{id}/feedbacks**  | Retorna avaliações e comentários.  |
| **POST /trilhas/{id}/feedbacks** | Cadastra um novo feedback.         |

---

# 16. Testes

| ID      | Teste               | Resultado esperado                         |
| ------- | ------------------- | ------------------------------------------ |
| **T01** | Login válido        | Usuário acessa a Home.                     |
| **T02** | Login inválido      | Sistema apresenta mensagem de erro.        |
| **T03** | Cadastro de usuário | Novo usuário é registrado corretamente.    |
| **T04** | Abrir trilhas       | Trilhas são carregadas.                    |
| **T05** | Selecionar trilha   | Detalhes são apresentados.                 |
| **T06** | Consultar aviso     | Aviso é apresentado.                       |
| **T07** | Enviar feedback     | Feedback é registrado.                     |
| **T08** | API indisponível    | Aplicativo apresenta mensagem adequada.    |
| **T09** | Trilha inexistente  | Sistema apresenta erro adequado.           |
| **T10** | Dados atualizados   | Aplicativo apresenta os dados atualizados. |

---

# 17. Organização sugerida do repositório

```text
tere-verde/
├── Frontend/
├── Backend/
├── docs/
│   ├── requisitos.md
│   ├── requisitos_funcionais.md
│   ├── requisitos_nao_funcionais.md
│   ├── escopo.md
│   ├── fluxo_usuario.md
│   ├── telas.md
│   ├── api.md
│   ├── testes.md
│   └── dados_trilhas.xlsx
├── imagens/
└── README.md
```

---

# 18. Tecnologias

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

## Banco de dados

* Banco de dados definido conforme a implementação do Backend.

## Ferramentas

* Git e GitHub
* Figma
* Postman
* Visual Studio Code

---

# 19. Como executar o Backend

Entre na pasta `Backend`:

```bash
cd Backend
```

Crie o ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual no Windows:

```bash
venv\Scripts\activate
```

Instale o Flask:

```bash
pip install Flask
```

Crie/configure o banco de dados:

```bash
python database.py
```

Insira os dados iniciais:

```bash
python seed.py
```

Inicie a API:

```bash
python app.py
```

Mantenha o Backend funcionando enquanto o Frontend estiver sendo executado.

### Comandos completos

```bash
python -m venv venv
venv\Scripts\activate
pip install Flask
python database.py
python seed.py
python app.py
```

---

# 20. Como executar o Frontend

Antes de iniciar o Frontend, certifique-se de que o **Backend já está funcionando**.

Entre na pasta:

```bash
cd Frontend
```

Instale as dependências:

```bash
npm install
```

Ajuste as dependências do Expo:

```bash
npx expo install --fix
```

Inicie o projeto:

```bash
npx expo start
```

Será exibido um **QR Code no terminal**.

---

## 📱 Abrindo no celular

Instale o **Expo Go** no dispositivo Android.

[Baixar Expo Go 57.0.9 (APK)](https://github.com/expo/expo-go-releases/releases/download/Expo-Go-57.0.9/Expo-Go-57.0.9.apk?utm_source=chatgpt.com)

Depois:

1. Abra o Expo Go.
2. Escaneie o QR Code exibido no terminal.
3. Aguarde o carregamento.
4. O Tere Verde será aberto no celular.

> Recomenda-se que o computador e o celular estejam conectados à mesma rede Wi-Fi durante o desenvolvimento.

---

# 21. Futuras funcionalidades e melhorias

As funcionalidades abaixo poderão ser implementadas em versões futuras do Tere Verde:

* 🗺️ **Mapa interativo das trilhas.**
* 📍 **GPS em tempo real.**
* 🧭 **Navegação durante a trilha.**
* 📴 **Mapas offline.**
* ⭐ **Trilhas favoritas.**
* 🏆 **Conquistas e medalhas.**
* 📜 **Histórico de trilhas realizadas.**
* 🌦️ **Informações climáticas em tempo real.**
* 🔔 **Notificações.**
* 📷 **Upload de fotos.**
* 🚨 **Sistema de emergência.**
* 👥 **Cadastro e gerenciamento de novos administradores pelo administrador.**

---

# 22. Status do projeto

* ☑ Definição inicial da ideia
* ☑ Definição do nome
* ☑ Divisão da equipe
* ☑ Definição das principais funcionalidades
* ☑ Planejamento das telas
* ☑ Definição dos requisitos funcionais
* ☑ Definição dos requisitos não funcionais
* ☑ Definição do escopo
* ☐ Desenvolvimento do Mobile
* ☐ Desenvolvimento da API
* ☐ Banco de dados
* ☐ Integração Mobile ↔ API
* ☐ Implementação das funcionalidades
* ☐ Testes
* ☐ Documentação final
* ☐ Apresentação

---

# 23. Considerações finais

O **Tere Verde** pretende unir tecnologia, turismo e natureza em uma solução mobile voltada às trilhas de Teresópolis.

O projeto permite à equipe aplicar conhecimentos de desenvolvimento mobile, APIs, banco de dados, integração de sistemas, testes, modelagem de produto e documentação.

A primeira versão do aplicativo será focada na **centralização e apresentação das informações das trilhas**, permitindo que os usuários encontrem dados relevantes sobre os percursos de maneira organizada e acessível.

Recursos que exigem maior integração tecnológica, como **mapa interativo, GPS em tempo real, navegação durante as trilhas e mapas offline**, permanecem como possibilidades para futuras versões.

O escopo definido também permite que a equipe apresente de forma clara quais funcionalidades fazem parte da versão atual e quais recursos estão planejados para evolução futura do projeto.

---

# 🌿 TERE VERDE

### Explore. Descubra. Preserve.

