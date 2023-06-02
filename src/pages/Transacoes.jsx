import Extrato from "../components/Extrato/Extrato";
import ExtratoNavBar from "../components/ExtratoNavBar/ExtratoNavBar";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/extrato.png";

const Subtitulo = "Visualize, baixe e compartilhe as informações do seu extrato bancário.";
const TemNavBar = true;

const Transacoes = () => (
    <>
        <Header/>
        <ExtratoNavBar />
        <Menu/>s
        <Titulo
            id = "Extrato"
            icon = {Icone}
            subtitulo = {Subtitulo}
            temNavBar = {TemNavBar}
        />

        <Extrato />
    </>
);

export default Transacoes;