import express from "express";
const app = express();
import routes from "./app/routes.js";

app.use(routes)//indica que o express deve usar as rotas definidas no arquivo routes.js
app.use(express.json());//indica que o express deve interpretar as requisições (nesse caso o body) como json



                                        //ROTAS PARA O BD//



export default app;