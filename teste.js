import * as fs  from 'fs';
const path = "./livros.json";
const dadosAtuais = JSON.parse(fs.readFileSync(path));
const novoDado = {id: 4, nome: "A jangada de Pedra", paginas: 66};

fs.writeFileSync(path, JSON.stringify([...dadosAtuais, novoDado]));
