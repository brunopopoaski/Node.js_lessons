import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {

    //Puxa os dados do banco de dados e retorna para o cliente
    async index(req, res) {
        const result = await SelecaoRepository.findAll()
        res.json(result)
    }

    // Puxa os dados de uma seleção específica do banco de dados e retorna para o cliente
    //neste caso o id da seleção é passado como parametro na url.
    async show(req, res) {
        const index = parseInt(req.params.id)
        const result = await SelecaoRepository.findById(index)
        res.json(result)
    }

    //Recebe os dados do corpo da requisição e é enviado pelo cliente e insere no banco de dados
    async store(req, res) {
        const selecao = req.body
        const result = await SelecaoRepository.create(selecao)
        res.json(result)
    }

    //Deleta uma seleção específica do banco de dados, o id da seleção a ser deletada é passado como parametro na url
    async delete(req, res) {
        const index = parseInt(req.params.id)//transforma o id recebido em numero, dava para passar direto no .json
        const result = await SelecaoRepository.delete(index)
        res.json(result)

    }

    //atualiza os dados de uma seleção específica do banco de dados, o id da seleção a ser atualizada é passado como parametro na url e os novos dados são enviados no corpo da requisição
    async update(req, res) {
        const selecao = req.body
        const index = parseInt(req.params.id)//transforma o id recebido em numero, dava para passar direto no .json
        const result = await SelecaoRepository.update(selecao, index)
        res.json(result)
    }

}

export default new SelecaoController();