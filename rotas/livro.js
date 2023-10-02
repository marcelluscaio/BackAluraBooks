import { Router } from "express";

const router = Router();

router.get('/livro', 
(req, res) => {
  res.send("Ola, mundo")
});

export { router };