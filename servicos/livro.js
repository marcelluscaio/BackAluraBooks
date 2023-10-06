import * as fs  from 'fs';

const path = "./livros.json";

function getTodosLivros(){
 return JSON.parse(fs.readFileSync(path))
};

export { getTodosLivros};