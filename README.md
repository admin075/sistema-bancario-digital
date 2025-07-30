Claro! Abaixo está a documentação detalhada, organizada por arquivos e caminhos, conforme solicitado.

---

# 1. `README.md`

**Caminho:** `/README.md`

```markdown
# 💳 Digital Banking System

![Java](https://img.shields.io/badge/Java-17-blue.svg)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.x-brightgreen)
![Oracle](https://img.shields.io/badge/Oracle-DB-red)
![Angular](https://img.shields.io/badge/Angular-16-dd0031)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.12-FF6600.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

Banco digital completo com fluxo de cadastro de clientes, aprovação via mensageria, autenticação JWT e gestão de empréstimos.

---

## 📑 Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração Oracle](#configuração-oracle)
- [Configuração RabbitMQ](#configuração-rabbitmq)
- [Execução Backend](#execução-backend)
- [Execução Frontend](#execução-frontend)
- [API & Endpoints](#api--endpoints)
- [Usuários de Exemplo](#usuários-de-exemplo)
- [Screenshots](#screenshots)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 🧩 Funcionalidades

- Cadastro e aprovação de clientes (workflow assíncrono)
- Autenticação JWT com roles (CLIENTE/GERENTE)
- Solicitação e aprovação de empréstimos até R$10.000
- Consulta de saldo e histórico de operações
- Dashboard gerencial e do cliente

---

## 🛠️ Tecnologias Utilizadas

### Backend

- Java 17
- Spring Boot 3.x
- Spring Security (JWT)
- JPA/Hibernate
- RabbitMQ
- Oracle Database

### Frontend

- Angular 16
- TypeScript
- Angular Material
- Bootstrap

### Outros

- Docker & Docker Compose
- Swagger/OpenAPI

---

## 📝 Pré-requisitos

- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- Java 17+ (caso não use Docker)
- Node.js 18+ e npm (para Angular, caso não use Docker)
- Oracle Database 19c+ (Docker recomendado)
- RabbitMQ 3.12+ (Docker recomendado)

---

## 🔧 Instalação

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/digital-banking-system.git
cd digital-banking-system
```

### 2. Build do Backend e Frontend

Com Docker Compose, o build é automático. Para builds manuais:

**Backend:**
```bash
cd backend
./mvnw clean package
```
**Frontend:**
```bash
cd frontend
npm install && npm run build
```

---

## 🗄️ Configuração do Oracle Database

1. **Via Docker:**

```bash
docker run -d --name oracle-db -p 1521:1521 -e ORACLE_PASSWORD=oracle18c gvenzl/oracle-xe:21.3.0
```

Usuário: `system`  
Senha: `oracle18c`  
Database: `XE` (default)

2. **Crie as tabelas e seed:**

```bash
docker cp database/schema.sql oracle-db:/tmp/
docker exec -it oracle-db bash
sqlplus system/oracle18c@XE
@/tmp/schema.sql
```
> 📌 Modifique os parâmetros de conexão no `application.properties` do backend conforme necessário.

---

## 🐰 Configuração do RabbitMQ

1. **Via Docker:**

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

- UI: [http://localhost:15672](http://localhost:15672)
- Usuário: `guest`
- Senha: `guest`

---

## 🚀 Execução do Backend

> ⚡️ Recomenda-se uso do Docker Compose, veja [docker-compose.yml](./docker-compose.yml).

Manual:
```bash
cd backend
./mvnw spring-boot:run
```
Backend roda em: [http://localhost:8080](http://localhost:8080)

---

## 🌐 Execução do Frontend

```bash
cd frontend
npm install
ng serve --open
```
Frontend roda em: [http://localhost:4200](http://localhost:4200)

---

## 📚 API & Endpoints

Documentação completa: [Swagger UI](http://localhost:8080/swagger-ui/index.html)  
Especificação OpenAPI: [`docs/api-documentation.yaml`](./docs/api-documentation.yaml)

Principais Endpoints:

| Método | Endpoint                                    | Descrição                           |
|--------|---------------------------------------------|-------------------------------------|
| POST   | /api/auth/login                             | Login                                |
| POST   | /api/clientes                               | Cadastro cliente                    |
| GET    | /api/clientes/me                            | Dados do cliente logado             |
| POST   | /api/emprestimos                            | Solicitar empréstimo                |
| GET    | /api/contas/saldo                           | Consultar saldo                     |
| GET    | /api/gerente/cadastros-pendentes            | Cadastros pendentes                 |
| PUT    | /api/gerente/aprovar-cadastro/{id}          | Aprovar cadastro                    |
| GET    | /api/gerente/emprestimos-pendentes          | Empréstimos pendentes               |
| PUT    | /api/gerente/aprovar-emprestimo/{id}        | Aprovar empréstimo                  |

Autenticação: Bearer JWT obrigatória após login.

---

## 👤 Usuários de Exemplo

| Tipo     | E-mail                | Senha      |
|----------|-----------------------|------------|
| Gerente  | gerente@banco.com     | admin123   |
| Cliente  | cliente@teste.com     | cliente123 |

---

## 🖼️ Screenshots

> **Ainda a serem adicionados.**
- ![Tela Login](docs/screenshots/login.png)
- ![Dashboard Cliente](docs/screenshots/dashboard-cliente.png)
- ![Dashboard Gerente](docs/screenshots/dashboard-gerente.png)

---

## 🗂️ Estrutura do Projeto

```text
├── backend/
├── frontend/
├── database/
│   └── schema.sql
├── docs/
│   ├── api-documentation.yaml
│   ├── DEVELOPMENT.md
│   └── screenshots/
├── docker-compose.yml
└── README.md
```

---

## 🤝 Contribuição

1. Fork este repositório
2. Crie sua feature branch: `git checkout -b feature/nome-feature`
3. Commit suas alterações: `git commit -m 'feat: adicionar nova feature'`
4. Push para a branch: `git push origin feature/nome-feature`
5. Abra um Pull Request

Veja [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) sobre arquitetura, padrões de código e testes.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](./LICENSE) para mais detalhes.

---

## 🆘 Troubleshooting

### Erro de conexão com Oracle

- Confirme que o container `oracle-db` está rodando (`docker ps`).
- Veja logs do container: `docker logs oracle-db`
- Verifique usuário, senha e porta no arquivo de configuração.

### Backend não inicia por falta do RabbitMQ

- Certifique-se de que o Broker está disponível em `localhost:5672`.
- Tente reiniciar o serviço RabbitMQ.

### Problemas de CORS

- Verifique se há configuração correta de CORS no backend (`WebSecurityConfig`).

### Links Úteis

- [Documentação Oracle XE Docker](https://hub.docker.com/r/gvenzl/oracle-xe)
- [RabbitMQ Management](https://www.rabbitmq.com/management.html)
- [Spring Boot Docs](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Angular Docs](https://angular.io/docs)
```

---

# 2. `database/schema.sql`

**Caminho:** `/database/schema.sql`

```sql
-- Criação do schema para sistema bancário digital
-- Recomendação: Execute como SYSTEM para criar usuário do banco

-- Criação do usuário do sistema (opcional)
CREATE USER banco_app IDENTIFIED BY "banco123";
GRANT CONNECT, RESOURCE, DBA TO banco_app;

-- Use este usuário a partir daqui:
ALTER SESSION SET CURRENT_SCHEMA = banco_app;

-- ==== TABELA USUÁRIOS ====
CREATE TABLE usuarios (
    id              NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    email           VARCHAR2(255) UNIQUE NOT NULL,
    senha           VARCHAR2(255) NOT NULL,
    nome            VARCHAR2(100) NOT NULL,
    role            VARCHAR2(20) NOT NULL, -- 'CLIENTE' ou 'GERENTE'
    criado_em       DATE DEFAULT SYSDATE,
    aprovado        NUMBER(1) DEFAULT 0 -- 0=pending, 1=active
);

CREATE INDEX idx_usuarios_email ON usuarios(email);

-- ==== TABELA CLIENTES ====
CREATE TABLE clientes (
    id              NUMBER PRIMARY KEY,
    cpf             VARCHAR2(14) UNIQUE NOT NULL,
    endereco        VARCHAR2(255),
    telefone        VARCHAR2(20),
    CONSTRAINT fk_cliente_usuario FOREIGN KEY (id) REFERENCES usuarios(id)
);

-- ==== TABELA CONTAS ====
CREATE TABLE contas (
    id              NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    usuario_id      NUMBER NOT NULL,
    saldo           NUMBER(15,2) DEFAULT 0,
    criado_em       DATE DEFAULT SYSDATE,
    CONSTRAINT fk_conta_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE INDEX idx_contas_usuario ON contas(usuario_id);

-- ==== TABELA EMPRÉSTIMOS ====
CREATE TABLE emprestimos (
    id              NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    usuario_id      NUMBER NOT NULL,
    valor           NUMBER(15,2) NOT NULL CHECK (valor <= 10000),
    status          VARCHAR2(20) NOT NULL, -- 'PENDENTE', 'APROVADO', 'NEGADO'
    criado_em       DATE DEFAULT SYSDATE,
    aprovado_em     DATE,
    CONSTRAINT fk_emprestimo_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE INDEX idx_emprestimos_usuario ON emprestimos(usuario_id);

-- ==== TABELA HISTÓRICO ====
CREATE TABLE historicos (
    id              NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    conta_id        NUMBER NOT NULL,
    tipo            VARCHAR2(30) NOT NULL, -- 'EMPRESTIMO', 'DEPOSITO', 'SAQUE'
    valor           NUMBER(15,2) NOT NULL,
    descricao       VARCHAR2(255),
    data_operacao   DATE DEFAULT SYSDATE,
    CONSTRAINT fk_historico_conta FOREIGN KEY (conta_id) REFERENCES contas(id)
);

-- ==== SEED DATA ====
-- Usuário gerente padrão:
INSERT INTO usuarios (email, senha, nome, role, aprovado)
VALUES ('gerente@banco.com', '$2a$10$uysXk6AIdiN5X2Y6zMjxMe4X7nJ4gp5IwVTkhojCCjA.gFd4nq5xC', 'Gerente Master', 'GERENTE', 1);
--<senha hash bcrypt=admin123>

-- Usuário cliente de exemplo (pendente):
INSERT INTO usuarios (email, senha, nome, role, aprovado)
VALUES ('cliente@teste.com', '$2a$10$l6DxT/wp1yff76akFmc7E.Cu4GKqvX7kQdKtgR/9zH/lwA9nvO9Ae', 'Cliente Exemplo', 'CLIENTE', 1);
--<senha hash bcrypt=cliente123>
INSERT INTO clientes (id, cpf, endereco, telefone)
VALUES ((SELECT id FROM usuarios WHERE email = 'cliente@teste.com'), '123.456.789-00', 'Rua A, 123', '(11) 98765-4321');
INSERT INTO contas (usuario_id, saldo)
VALUES ((SELECT id FROM usuarios WHERE email = 'cliente@teste.com'), 3200);

-- ==== PROCEDURE PARA APROVAR CADASTRO ====
CREATE OR REPLACE PROCEDURE aprovar_cliente(p_usuario_id IN NUMBER) AS
BEGIN
    UPDATE usuarios SET aprovado = 1 WHERE id = p_usuario_id;
    INSERT INTO contas (usuario_id, saldo) VALUES (p_usuario_id, 0);
END;
/

-- ==== FUNCTION PARA CONSULTAR SALDO ====
CREATE OR REPLACE FUNCTION saldo_usuario(p_usuario_id IN NUMBER)
RETURN NUMBER
AS
  v_saldo NUMBER;
BEGIN
  SELECT saldo INTO v_saldo FROM contas WHERE usuario_id = p_usuario_id;
  RETURN v_saldo;
END;
/
```

---

# 3. `docs/api-documentation.yaml`

**Caminho:** `/docs/api-documentation.yaml`

```yaml
openapi: 3.0.3
info:
  title: Digital Banking System API
  description: |
    API para interação com o sistema bancário digital (cadastro de clientes, autenticação, empréstimos e dashboards).
  version: 1.0.0
  contact:
    name: Dev Team
    email: suporte@banco.com

servers:
  - url: http://localhost:8080

tags:
  - name: Autenticação
    description: Endpoints de login e emissão de token JWT.
  - name: Clientes
    description: Cadastro e consulta de clientes.
  - name: Contas
    description: Consultas financeiras (saldo/histórico).
  - name: Empréstimos
    description: Solicitação e aprovação de empréstimos.
  - name: Gerente
    description: Aprovação de cadastros e empréstimos.

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

  schemas:
    AuthRequest:
      type: object
      properties:
        email:
          type: string
          example: cliente@teste.com
        senha:
          type: string
          example: cliente123
      required:
        - email
        - senha

    AuthResponse:
      type: object
      properties:
        token:
          type: string
        usuario:
          $ref: '#/components/schemas/Usuario'

    Usuario:
      type: object
      properties:
        id:
          type: integer
        email:
          type: string
        nome:
          type: string
        role:
          type: string
        aprovado:
          type: boolean

    ClienteRequest:
      type: object
      properties:
        email:
          type: string
        senha:
          type: string
        nome:
          type: string
        cpf:
          type: string
        endereco:
          type: string
        telefone:
          type: string
      required:
        - email
        - senha
        - nome
        - cpf

    ClienteResponse:
      type: object
      properties:
        id:
          type: integer
        email:
          type: string
        nome:
          type: string
        cpf:
          type: string
        role:
          type: string

    EmprestimoRequest:
      type: object
      properties:
        valor:
          type: number
          format: float
          example: 5000.00
      required:
        - valor

    EmprestimoResponse:
      type: object
      properties:
        id:
          type: integer
        valor:
          type: number
          format: float
        status:
          type: string
        criado_em:
          type: string
          format: date-time

    SaldoResponse:
      type: object
      properties:
        saldo:
          type: number
          format: float
          example: 3200.00

security:
  - BearerAuth: []

paths:
  /api/auth/login:
    post:
      tags: [Autenticação]
      summary: Login e geração de JWT
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AuthRequest'
      responses:
        200:
          description: Login OK, retorna token JWT
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthResponse'
        401:
          description: Credenciais incorretas

  /api/clientes:
    post:
      tags: [Clientes]
      summary: Cadastro de cliente
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ClienteRequest'
      responses:
        201:
          description: Cadastro pendente de aprovação
        409:
          description: E-mail ou CPF já cadastrados

  /api/clientes/me:
    get:
      tags: [Clientes]
      summary: Dados do cliente logado
      security: [BearerAuth: []]
      responses:
        200:
          description: Dados do usuário autenticado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ClienteResponse'
        401:
          description: Token inválido ou ausente

  /api/emprestimos:
    post:
      tags: [Empréstimos]
      summary: Solicitar empréstimo
      security: [BearerAuth: []]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EmprestimoRequest'
      responses:
        201:
          description: Solicitação em análise
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/EmprestimoResponse'
        400:
          description: Valor máximo ultrapassado
        401:
          description: Não autenticado

  /api/contas/saldo:
    get:
      tags: [Contas]
      summary