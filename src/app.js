import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";//importando uma classe com os metodos para realizar as operações no BD
const app = express();
app.use(express.json());//indica que o express deve interpretar as requisições (nesse caso o body) como json



                                        //ROTAS PARA O BD//

/* SELECIONANDO E RETORNANDO DADOS DO BANCO DE DADOS */
//criando uma rota para retornar a lista de seleções
app.get("/selecoes", SelecaoController.index)
//</>

//criando uma rota para retornar uma seleção específica
//o :id vira um parametro que pode ser usado
app.get("/selecoes/:id", SelecaoController.show)
//</>

//INSERINDO DADOS NO BANCO DE DADOS
app.post("/selecoes", SelecaoController.store)
//</>

//ATUALIZANDO DADOS NO BANCO DE DADOS
app.put("/selecoes/:id", SelecaoController.update)
//</>

//DELETANDO DADOS NO BANCO DE DADOS
app.delete("/selecoes/:id", SelecaoController.delete)
//</>

export default app;