import * as fs  from 'fs';

const path = "./livros.json";

function getTodosLivros(){
 return JSON.parse(fs.readFileSync(path))
};

function getLivroPorId(id){
  const livros = getTodosLivros();
  
  const livroFiltrado = livros.filter(livro => parseInt(id) === livro.id);
  return livroFiltrado;
 };

 function insereLivro(livroNovo){
  const livros = getTodosLivros();
  if(livroNovo.nome && livroNovo.id){
    const novaListaLivros = [...livros, livroNovo];
  
    fs.writeFileSync(path, JSON.stringify(novaListaLivros))
  } else{
    throw(new Error)
  }
 }

export { getTodosLivros, getLivroPorId, insereLivro};