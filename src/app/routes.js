import { Router } from "express";
import SelecaoController from "./controllers/SelecaoController.js";//importando uma classe com os metodos para realizar as operações no BD

const routers = Router()

//ROTAS

/* SELECIONANDO E RETORNANDO DADOS DO BANCO DE DADOS */
//criando uma rota para retornar a lista de seleções
routers.get("/selecoes", SelecaoController.index)
//</>

//criando uma rota para retornar uma seleção específica
//o :id vira um parametro que pode ser usado
routers.get("/selecoes/:id", SelecaoController.show)
//</>

//INSERINDO DADOS NO BANCO DE DADOS
routers.post("/selecoes", SelecaoController.store)
//</>

//ATUALIZANDO DADOS NO BANCO DE DADOS
routers.put("/selecoes/:id", SelecaoController.update)
//</>

//DELETANDO DADOS NO BANCO DE DADOS
routers.delete("/selecoes/:id", SelecaoController.delete)
//</>

export default  routers;