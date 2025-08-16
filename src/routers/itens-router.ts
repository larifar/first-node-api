import express from "express";
import Item from "../models/item";

const itensRouter = express.Router();

itensRouter.post("/itens", (req, res) => {
  itensRouter.post("/itens", (req, res) => {
    const item: Item = req.body;
    //TODO: Criar e salvar um novo item
    const id = 123;
    res.status(201).location(`/itens/${id}`).send(); //envia a url do novo item criado no header location
  });
});
itensRouter.get("/itens", (req, res) => {
  const itens: Item[] = [
    {
      id: 1,
      nome: "Produto 1",
      descricao: "Descrição do produto 1",
    },
    {
      id: 2,
      nome: "Produto 2",
      descricao: "Descrição do produto 2",
    },
  ];
  res.json(itens);
});
itensRouter.get("/itens/:id", (req, res) => {
  const id: number = +req.params.id; // + é unário equivale a parseInt() ou Number()
  const item: Item = {
    id: id,
    nome: `Produto ${id}`,
    descricao: `Descrição do produto ${id}`,
  };
  res.json(item);
});
itensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send() //204 é sucesso de alteração item e sem body
})
itensRouter.delete("/itens/:id", (req, res) => {
  const id: number = +req.params.id;
  res.send(`Apaga o item ${id}`);
});
export default itensRouter;
