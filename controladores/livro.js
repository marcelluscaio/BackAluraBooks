import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro } from "../servicos/livro.js";

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

function criaLivro(req, res){
  try{
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201).send(livroNovo);
  } catch(error){
    res.status(500).send(error)
  }
};

function editaLivro(req, res){
  modificaLivro(req.params['id'], req.body)
}

export {getLivros, getLivroEspecifico, criaLivro, editaLivro};