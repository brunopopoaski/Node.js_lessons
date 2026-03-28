import app from "./app.js";
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta  http://localhost:${PORT}`);
});




/* INSERT INTO `bd_copa`.`selecoes` (`id`, `nome`, `continente`) VALUES ('', 'Holanda', 'Europa');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Senegal', 'Africa');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Equador', 'America do Sul');
INSERT INTO `bd_copa`.`selecoes` (`nome`, `continente`) VALUES ('Catar', 'Europa');
 */

