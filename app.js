import express from "express";
import { router } from "./rotas/livro.js";

const app = express();



app.use('/', router);






const port = 8000;


app.listen(port, () => {
  console.log(`Escutando porta ${port}`)
});