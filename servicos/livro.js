import * as fs  from 'fs';

const path = "./livros.json";

function getTodosLivros(){
 return JSON.parse(fs.readFileSync(path))
};

function getLivroPorId(id){
  const livros = getTodosLivros();
  
  const livroFiltrado = livros.filter(livro => parseInt(id) === livro.id);
  /* console.log(livroFiltrado); */
  return livroFiltrado;
 };

export { getTodosLivros, getLivroPorId};