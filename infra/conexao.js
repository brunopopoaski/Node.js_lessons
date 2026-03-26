import myql from 'mysql'

const conexao = myql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ps3enois!',
    database: 'bd_copa'
})

export default conexao