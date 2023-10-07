import express from "express";
import { router } from "./rotas/livro.js";

const app = express();
app.use(express.json())


app.use('/livro', router);


const port = 8000;


app.listen(port, () => {
  console.log(`Escutando porta ${port}`)
});