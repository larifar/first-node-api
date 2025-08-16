import { Pool } from "pg";

const database = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teste_node",
  password: "postgres",
  port: 5432,
});

const SQL_ITENS_CREATE = `
CREATE TABLE IF NOT EXISTS itens (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL
)`;

database.query(SQL_ITENS_CREATE)
  .then(() => {
    console.log("Tabela itens criada com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabela:", err);
    throw err;
  });

console.log("Base de dados conectada com sucesso.");

export default database;