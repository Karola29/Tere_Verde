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

## 6. Principais funcionalidades

| Funcionalidade        | Descrição                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- |
| 🏠 **Página inicial** | Trilhas em destaque, trilhas populares, avisos e acesso rápido às principais funcionalidades. |
| 🥾 **Trilhas**        | Lista de trilhas com nome, imagem, localização, descrição e características.                  |
| 📖 **Detalhes**       | Informações completas sobre cada trilha, incluindo distância, duração e dificuldade.          |
| ⚠️ **Avisos**         | Alertas sobre fechamento, manutenção, condições climáticas e pontos de atenção.               |
| ⭐ **Feedbacks**       | Avaliações, comentários e experiências compartilhadas pelos usuários.                         |
| 🔍 **Filtros**        | Busca por dificuldade, distância, duração, localização e avaliação.                           |
| 👤 **Perfil**         | Informações e dados do usuário.                                                               |

---

## 7. Fluxo principal do usuário

**Abrir aplicativo → Splash → Login → Home → Trilhas → Selecionar trilha → Detalhes da trilha → Avisos/Feedback → Explorar**

---

## 8. Estrutura das telas

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

## 9. Arquitetura do projeto

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

## 10. Divisão da equipe

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

## 11. Dados das trilhas

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

## 12. Integração Mobile ↔ API

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

## 13. Testes

| ID      | Teste              | Resultado esperado                         |
| ------- | ------------------ | ------------------------------------------ |
| **T01** | Login válido       | Usuário acessa a Home.                     |
| **T02** | Login inválido     | Sistema apresenta mensagem de erro.        |
| **T03** | Abrir trilhas      | Trilhas são carregadas.                    |
| **T04** | Selecionar trilha  | Detalhes são apresentados.                 |
| **T05** | Consultar aviso    | Aviso é apresentado.                       |
| **T06** | Enviar feedback    | Feedback é registrado.                     |
| **T07** | API indisponível   | Aplicativo apresenta mensagem adequada.    |
| **T08** | Trilha inexistente | Sistema apresenta erro adequado.           |
| **T09** | Dados atualizados  | Aplicativo apresenta os dados atualizados. |

---

## 14. Organização sugerida do repositório

```text
tere-verde/
├── mobile/
├── backend/
├── docs/
│   ├── requisitos.md
│   ├── fluxo_usuario.md
│   ├── telas.md
│   ├── api.md
│   ├── testes.md
│   └── dados_trilhas.xlsx
├── imagens/
└── README.md
```

---

## 15. Tecnologias previstas

* **Mobile:** framework e linguagem definidos pela equipe.
* **Backend:** Python + Flask.
* **API:** arquitetura REST e JSON.
* **Banco de dados:** definido conforme a implementação do backend.
* **Git e GitHub:** versionamento do projeto.
* **Figma:** prototipação das telas.
* **Postman:** testes da API.

---

## 16. Futuras funcionalidades e melhorias

As funcionalidades abaixo poderão ser implementadas em versões futuras do Tere Verde:

* 🗺️ **Mapa interativo das trilhas.**
* 📍 **GPS em tempo real.**
* 🧭 **Navegação durante a trilha.**
* 📴 **Mapas offline.**
* ⭐ **Trilhas favoritas.**
* 🏆 **Conquistas e medalhas.**
* 📜 **Histórico de trilhas realizadas.**
* 🌦️ **Informações climáticas.**
* 🔔 **Notificações.**
* 📷 **Upload de fotos.**
* 🚨 **Sistema de emergência.**

---

## 17. Status do projeto

* ☑ Definição inicial da ideia
* ☑ Definição do nome
* ☑ Divisão da equipe
* ☑ Definição das principais funcionalidades
* ☑ Planejamento das telas
* ☐ Desenvolvimento do Mobile
* ☐ Desenvolvimento da API
* ☐ Banco de dados
* ☐ Integração Mobile ↔ API
* ☐ Implementação das funcionalidades
* ☐ Testes
* ☐ Documentação final
* ☐ Apresentação

---

## 18. Considerações finais

O **Tere Verde** pretende unir tecnologia, turismo e natureza em uma solução mobile voltada às trilhas de Teresópolis.

O projeto também permite à equipe aplicar conhecimentos de desenvolvimento mobile, APIs, banco de dados, integração de sistemas, testes, modelagem de produto e documentação.

A primeira versão do aplicativo será focada na **centralização e apresentação das informações das trilhas**, permitindo que os usuários encontrem dados relevantes sobre os percursos de maneira organizada e acessível.

Funcionalidades mais avançadas, como **mapa interativo, GPS em tempo real, navegação durante as trilhas e mapas offline**, poderão ser incorporadas futuramente, ampliando as possibilidades do aplicativo.

---

# 🌿 TERE VERDE

### Explore. Descubra. Preserve.

