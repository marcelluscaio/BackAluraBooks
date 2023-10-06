import { Router } from "express";
import { getLivros } from "../controladores/livro.js";

const router = Router();

router.get('/livro', getLivros);

router.post('/livro', 
(req, res) => {
  res.send("Requisicao post")
});

export { router };