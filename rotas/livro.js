import { Router } from "express";
import { getLivros, getLivroEspecifico, criaLivro, editaLivro } from "../controladores/livro.js";

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivroEspecifico);

router.post('/', criaLivro);

router.patch('/:id', editaLivro);

export { router };