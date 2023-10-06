import { getTodosLivros, getLivroPorId } from "../servicos/livro.js";

function getLivros(req, res) {
  try{
    const livros = getTodosLivros();
    res.status(200).send(livros);    
  } catch(error){
    res.status(500).send("Erro")
  }
}

function getLivroEspecifico(req, res){
  try{
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.status(200).send(livro);
  }catch(error){
    res.status(500).send(error)
  }
}

export {getLivros, getLivroEspecifico};