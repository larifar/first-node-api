import express from "express";
import Item from "../models/item";
import itensRepository from "../repositories/item-repository";

const itensRouter = express.Router();

itensRouter.post('/itens', async (req, res) => { //permite usar await dentro ao inves de receber callback
    const item: Item = req.body;

    try {
        const id = await itensRepository.criar(item);
        res.status(201).location(`/itens/${id}`).send();
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

itensRouter.get('/itens', async (_req, res) => {
    try {
        const itens = await itensRepository.lerTodos();
        res.json(itens);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});
itensRouter.get('/itens/:id', async (req, res) => {
    const id: number = +req.params.id; //+ é uniario equivale a perseInt() ou Number()

    try {
        const item = await itensRepository.ler(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send("Item não encontrado.");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});
itensRouter.put('/itens/:id', async (req, res) => {
    const id: number = +req.params.id;

    try {
        // Busca o item atual no banco
        const itemExistente = await itensRepository.ler(id);
        if (!itemExistente) return res.status(404).send();

        // Pega o nome do body ou mantém o do item existente
        const nome = req.body.nome ?? itemExistente.nome;
        const descricao = req.body.descricao ?? itemExistente.descricao;

        const notFound = await itensRepository.atualizar(id, { nome, descricao });
        if (notFound) {
            res.status(404).send();
        } else {
            res.status(204).send();
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});
itensRouter.delete('/itens/:id', async (req, res) => {
    const id: number = +req.params.id;

    try {
        const notFound = await itensRepository.apagar(id);
        if (notFound) {
            res.status(404).send("Item não encontrado");
        } else {
            res.status(204).send();
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});
export default itensRouter;
