import {Caixa, MeuIcone, Nome, Conta, Seletor1, Seletor2} from "./Style";
import ImagemConfig from "../../imagens/configuracoes.png";
import ImagemSair from "../../imagens/sair.png";
import ImagemPerfil from "../../imagens/icone_perfil.png";

const Perfil = () => (
    <Caixa>
        <MeuIcone>
            <img src={ImagemPerfil}/>
        </MeuIcone>

        <Nome>
            Nome do Usuário
        </Nome>

        <Conta>
            Conta: 000-00
        </Conta>

        <Seletor1>
            <img src={ImagemConfig}/>
            <p>Configurações</p>
        </Seletor1>

        <Seletor2>
            <img src={ImagemSair}/>
            <p>Sair</p>
        </Seletor2>
    </Caixa>
);

export default Perfil;