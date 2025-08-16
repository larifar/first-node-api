import Item from "../models/item";
import pool from "./database"; // seu Pool do pg

const itensRepository = {
  criar: async (item: Item): Promise<number> => {
    const sql =
      "INSERT INTO itens (nome, descricao) VALUES ($1, $2) RETURNING id";
    const params = [item.nome, item.descricao];

    const result = await pool.query(sql, params);
    return result.rows[0].id; // retorna o ID gerado
  },
  lerTodos: async (): Promise<Item[]> => {
    const sql = "SELECT * FROM itens";
    const result = await pool.query(sql);
    return result.rows; // retorna todos os itens
  },
  ler: async (id: number): Promise<Item | null> => {
    const sql = "SELECT * FROM itens WHERE id = $1";
    const result = await pool.query(sql, [id]);
    return result.rows[0] || null;
  },
  atualizar: async (id: number, item: Item): Promise<boolean> => {
    const sql = "UPDATE itens SET nome = $1, descricao = $2 WHERE id = $3";
    const params = [item.nome, item.descricao, id];

    const result = await pool.query(sql, params);
    return result.rowCount === 0; // true se não encontrou o item
  },
  apagar: async (id: number): Promise<boolean> => {
    const sql = "DELETE FROM itens WHERE id = $1";
    const result = await pool.query(sql, [id]);
    return result.rowCount === 0; // true se não encontrou o item
  },
};

export default itensRepository;
