function getLivros(req, res) {
  try{
    res.status(200).send("Requisicao get")
    
  } catch(error){
    res.status(500).send("Erro")

  }
}

export {getLivros};