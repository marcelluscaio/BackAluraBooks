import { Router } from "express";
import { getLivros, getLivroEspecifico, criaLivro, editaLivro, deletaLivro } from "../controladores/livro.js";

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivroEspecifico);

router.post('/', criaLivro);

router.patch('/:id', editaLivro);

router.delete('/:id', deletaLivro);

export { router };