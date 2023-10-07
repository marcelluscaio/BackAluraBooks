import { Router } from "express";
import { getLivros, getLivroEspecifico, criaLivro } from "../controladores/livro.js";

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivroEspecifico);

router.post('/', criaLivro);

router.post('/livro', 
(req, res) => {
  res.send("Requisicao post")
});

export { router };