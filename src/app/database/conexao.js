import myql from 'mysql'

const conexao = myql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ps3enois!',
    database: 'bd_copa'
})

conexao.connect()

/**
 * 
 * @param {string} sql recebe codigo da consulta sql
 * @param {string | [selecao, id]} valores recebe os valores utilizados
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da promise
 */

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) {
                reject(`${mensagemReject} - ${erro}`)
            } else {
                const row = JSON.parse(JSON.stringify(resultado))
                resolve(row)
            }
        })
    })
}

export default conexao