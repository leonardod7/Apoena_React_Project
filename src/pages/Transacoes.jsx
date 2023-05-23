import Extrato from "../components/Extrato/Extrato";
import Menu from "../components/Menu/Menu";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/extrato.png"

const Transacoes = () => (
    <>
        <Menu/>
        <Titulo
            id = "Extrato"
            icon = {Icone}
        />

    <Extrato />
    </>
);

export default Transacoes;