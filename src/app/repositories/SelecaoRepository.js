import conexao, {consulta} from "../database/conexao.js";


class selecaoRepository {
    //CRUD - CREATE, FINDALL, FINDBYID, UPDATE, DELETE

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        const erro = "Erro ao criar a seleção"
        return consulta(sql, selecao, erro)
    }
    
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        const erro = "Erro ao buscar as seleções"
        return consulta(sql, '', erro)
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?;"
        const erro = "Erro ao buscar a seleção"
        return consulta(sql, id, erro)
    }

    update(selecao, index) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        const erro = "Erro ao atualizar a seleção"
        return consulta(sql, [selecao, index], erro)
    }

    delete(index) {
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        const erro = "Erro ao excluir seleção"
        return consulta(sql, index, erro)
    }
    
}

export default new selecaoRepository();




//antes de organizar o código usando o padrão repository

/*     update(selecao, index) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, index], (erro, resultado) => {
                if (erro) {
                    reject(`Erro ao atualizar a seleção: ${erro}`)
                } else {
                    const resultadoAtualizado = JSON.parse(JSON.stringify(resultado))
                    resolve(resultadoAtualizado)
                }
            })
        })
    }

    delete(index) {
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, index, (erro, resultado) => {
                if (erro) {
                    reject(`Erro ao excluir seleção: ${erro}`)
                } else {
                    const selecaoExcluida = JSON.parse(JSON.stringify(resultado))
                    resolve(selecaoExcluida)
                }
            })
        })
    }


}
 */