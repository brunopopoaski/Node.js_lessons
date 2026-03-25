import express from "express";
const app = express();

//indica que o express deve interpretar as requisições (nesse caso o body) como json
app.use(express.json());

//mock
const listSelecoes = [
    {id: 1, nome: "Brasil", continente: "América do Sul"},
    {id: 2, nome: "Argentina", continente: "América do Sul"},
    {id: 3, nome: "Chile", continente: "América do Sul"},
    {id: 4, nome: "Peru", continente: "América do Sul"}
]
//

//rota padrão
app.get("/", (req, res) => {
    res.send("Hello World!");
})

//criando uma rota para retornar a lista de seleções
app.get("/selecoes", (req, res) => {
    res.send(listSelecoes);
})

//criando uma rota para retornar uma seleção específica
//o :id vira um parametro que pode ser usado
app.get("/selecoes/:id", (req, res) => {
    const index = parseInt(req.params.id)//transforma o id recebido em numero, dava para passar direto no .json
    res.json(buscarSelecaoPorId(parseInt(req.params.id)));
})

app.delete("/selecoes/:id", (req, res) => {
    const index = parseInt(req.params.id)//transforma o id recebido em numero, dava para passar direto no .json
    listSelecoes.splice((buscarPosicaoSelecaoPorId(parseInt(req.params.id))),1);
    res.send(`Seleção ${index} deletada com sucesso!`);
})

//criando uma rota para adicionar uma nova seleção
app.post("/selecoes", (req, res) => {
    const novaSelecao = req.body;
    listSelecoes.push(novaSelecao);
    res.send("Seleção adicionada com sucesso!");
})


//funcao buscar selecao por id, para evitar repetição de código
function buscarSelecaoPorId(id) {
    return listSelecoes.find(selecao => selecao.id === id);
}

// funcao buscar posicao da selecao no array por id
function buscarPosicaoSelecaoPorId(id) {
    return listSelecoes.findIndex(selecao => selecao.id === id);
}

export default app;