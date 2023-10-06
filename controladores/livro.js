import { getTodosLivros } from "../servicos/livro";

function getLivros(req, res) {
  try{
    const livros = getTodosLivros();
    res.status(200).send(livros);    
  } catch(error){
    res.status(500).send("Erro")

  }
}

export {getLivros};