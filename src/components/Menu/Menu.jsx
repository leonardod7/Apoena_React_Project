import { Link } from "react-router-dom";
import {MeuNav, MeuDiv, MeuSubDiv, MeuLogo} from "./Style";
import ImagemHome from "../../imagens/home.png";
import ImagemConfiguracoes from "../../imagens/engrenagem.png";
import ImagemFluxoDeCaixa from "../../imagens/fluxo_de_caixa.png";
import ImagemExtrato from "../../imagens/extrato.png";
import ImagemPrevisto from "../../imagens/previsto.png";
import ImagemCadastrarLancamentos from "../../imagens/cadastrar_lancamentos.png";
import ImagemImportarLancamentos from "../../imagens/importar_lancamentos.png";
import ImagemConsultarPrevisao from "../../imagens/consultar_previsao.png";
import ImagemRelatoriosLancamentos from "../../imagens/relatorios_lancamentos.png";
import ImagemAgendamentos from "../../imagens/relogio.png";
import ImagemInadiplencias from "../../imagens/inadiplencias.png";
import ImagemLogo from "../../imagens/logo_gargo.png";
import ImagemSifrao from "../../imagens/sifrao.png";
{/* import ImagemMeiosDePagamentos from "../../imagens/meios_de_pagamentos.png" */}


const Menu = ({isOpen}) => (
    <MeuNav isOpen = {isOpen}>
        <MeuLogo>
            <img src={ImagemLogo}/>
        </MeuLogo>

        <MeuDiv>
            <img src={ImagemHome} alt="home"/>
            <Link to="/">Home</Link>
        </MeuDiv>
        
        <MeuDiv>
            <img src={ImagemConfiguracoes} alt="configuracoes"/>
            <p>Configurações da empresa</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemFluxoDeCaixa} alt="fluxo_de_caixa"/>
            <p>Fluxo de caixa</p>
        </MeuDiv>
        
        <MeuDiv>
            <img src={ImagemExtrato} alt="extrato"/>
            <Link to="/transacoes">Extrato</Link>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemPrevisto} alt="previsto"/>
            <p>Previsto</p>
        </MeuDiv>
        
        <MeuSubDiv>
            <img src={ImagemCadastrarLancamentos} alt="cadastrar_lancamentos"/>
            <p>Cadastrar lançamentos</p>
        </MeuSubDiv>

        <MeuSubDiv>
            <img src={ImagemImportarLancamentos} alt="importar_lancamentos"/>
            <p>Importar lançamentos de ERPs</p>
        </MeuSubDiv>

        <MeuSubDiv>
            <img src={ImagemConsultarPrevisao} alt="consultar_previsao"/>
            <p>Consultar previsão</p>
        </MeuSubDiv>

        <MeuSubDiv>
            <img src={ImagemRelatoriosLancamentos} alt="relatorio_lancamentos"/>
            <p>Relatórios de lançamentos</p>
        </MeuSubDiv>

        <MeuSubDiv>
            <img src={ImagemAgendamentos} alt="agendamentos"/>
            <p>Agendamentos</p>
        </MeuSubDiv>

        <MeuDiv>
            <img src={ImagemInadiplencias} alt="inadiplencias"/>
            <p>Inadimplências</p>
        </MeuDiv>

        <MeuDiv>
            {/*<img src={ImagemMeiosDePagamentos} alt="meios_de_pagamentos"/>
            <Link to="/meiosdepagamentos">Meios de pagamentos</Link> */}
        </MeuDiv>
    </MeuNav>
);

export default Menu;