import { Router } from "express";

const router = Router();

router.get('/livro', 
(req, res) => {
  res.send("Requisicao get")
});

router.post('/livro', 
(req, res) => {
  res.send("Requisicao post")
});

export { router };