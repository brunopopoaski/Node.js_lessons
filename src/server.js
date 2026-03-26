import app from "./app.js";
import conexao from "../infra/conexao.js";
const PORT = 3000;


//usar conexao que foi criada

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Conexão com o banco de dados realizada com sucesso!!!');
        //escutar a porta
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta  http://localhost:${PORT}`);
        });
    }
})


/* INSERT INTO `bd_copa`.`selecoes` (`id`, `nome`, `continente`) VALUES ('', 'Holanda', 'Europa');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Senegal', 'Africa');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Equador', 'America do Sul');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Catar', 'Europa');
 */

