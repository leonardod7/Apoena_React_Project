import { Link } from "react-router-dom";
import {MeuNav, MeuDiv} from "./Style";
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


const Menu = () => (
    <MeuNav>
        <img src={ImagemLogo}/>

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
            <p>Extrato</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemPrevisto} alt="previsto"/>
            <p>Previsto</p>
        </MeuDiv>

        
        <MeuDiv>
            <img src={ImagemCadastrarLancamentos} alt="cadastrar_lancamentos"/>
            <p>Cadastrar lançamentos</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemImportarLancamentos} alt="importar_lancamentos"/>
            <p>Importar lançamentos de ERPs</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemConsultarPrevisao} alt="consultar_previsao"/>
            <p>Consultar previsão</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemRelatoriosLancamentos} alt="relatorio_lancamentos"/>
            <p>Relatórios de lançamentos</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemAgendamentos} alt="agendamentos"/>
            <p>Agendamentos</p>
        </MeuDiv>

        <MeuDiv>
            <img src={ImagemInadiplencias} alt="inadiplencias"/>
            <p>Inadiplências</p>
        </MeuDiv>

        <Link to="/teste">Teste</Link>
        <Link to="/transacoes">Transações</Link>
        <Link to="/meiosdepagamentos">Meios de pagamentos</Link>
       
    </MeuNav>
);

export default Menu;