import * as fs  from 'fs';

const path = "./livros.json";

/**
 * 
 * @param {* id a ser buscada } 
 * @param {* livro  a ser buscado }
 * @returns boolean
 */
function comparaId(id, livro){
 return parseInt(id) === livro.id;
};

function getTodosLivros(){
 return JSON.parse(fs.readFileSync(path))
};

function getLivroPorId(id){
  const livros = getTodosLivros();
  
  const livroFiltrado = livros.find(livro => comparaId(id, livro));
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

 function modificaLivro(id, dadosNovos){
  const livros = getTodosLivros();
  const indiceLivroParaMudar = livros.findIndex(livro => comparaId(id, livro));
  const objetoParaMudar = livros[indiceLivroParaMudar];
  const objetoModificado = {...objetoParaMudar, ...dadosNovos};
  livros[indiceLivroParaMudar] = objetoModificado;
  fs.writeFileSync(path, JSON.stringify(livros));
 }

export { getTodosLivros, getLivroPorId, insereLivro, modificaLivro};