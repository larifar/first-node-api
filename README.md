# First Node API com TypeScript, Express e PostgreSQL

API REST construída como projeto de aprendizado, demonstrando habilidades em **Node.js, TypeScript e PostgreSQL**.
Tutorial original: [Medium](https://medium.com/@eldes.com/tutorial-aplicação-rest-api-com-node-em-typescript-usando-express-e-sqlite-a4ea6a7c3563)

---

## 🛠 Tecnologias e Skills

* **Backend:** Node.js, Express, TypeScript
* **Banco de dados:** PostgreSQL (CRUD assíncrono)
* **Boas práticas:**

  * Async/await para código limpo e legível
  * Modularização: routers, repositories e models separados
  * Tratamento de erros básico e rotas REST completas
  * Uso de Typescript para tipagem e segurança
* **Ferramentas de desenvolvimento:** npm, ts-node, nodemon

---

## 💡 Funcionalidades implementadas

* CRUD completo de itens (`create`, `read`, `update`, `delete`)
* Roteamento modular (`/api/itens`)
* Configuração de CORS e parsing de JSON
* Conexão com banco de dados e criação automática de tabela
* Respostas HTTP apropriadas (201, 204, 404, 400)

---

## ⚡ Setup rápido

```bash
npm install
npx tsc --init
npm run dev        # rodar em desenvolvimento
npm run build      # compilar TypeScript
npm start          # rodar versão compilada
```

### Scripts `package.json`

```json
"scripts": {
  "dev": "nodemon --watch \"src/**\" --ext \"ts,json\" --exec \"ts-node ./src/index.ts\"",
  "build": "tsc",
  "start": "node ./dist/index.js"
}
```

---

## 🗂 Estrutura do projeto

```
src/
  index.ts            # ponto de entrada
  models/
    item.ts           # model Item
  routers/
    itens-router.ts   # rotas REST
  repositories/
    database.ts       # conexão PostgreSQL
    item-repository.ts # CRUD assíncrono
```

