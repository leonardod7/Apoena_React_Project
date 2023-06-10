import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/meios_de_pagamentos.png";
import Faturas from "../components/Faturas/Faturas";
import Clientes from "../components/Clientes/Clientes";
import {ContainerFaturas} from "./Style";
import { useState } from "react";
import HeaderPage from "../components/Header_MeiosPGTO/HeaderPgto";
import {BotaoHeader_pgto, Container_Header, TituloHeader_pgto} from "../components/Header_MeiosPGTO/Style";


const Subtitulo = "";
const TemNavBar = true;

const MeiosDePagamentos = () => {

    const [MenuAberto, setMenuAberto] = useState(true);

    const toggleMenu = () => {
        setMenuAberto(!MenuAberto);
      };
    
    return (
        <>
            <Header toggleMenu = {toggleMenu}/>
            <Menu isOpen = {MenuAberto}/>
            {/*<Titulo*/}
            {/*    id = "Meios de Pagamentos"*/}
            {/*    icon = {Icone}*/}
            {/*    subtitulo = {Subtitulo}*/}
            {/*    temNavBar = {TemNavBar}*/}
            {/*    isOpen = {MenuAberto}*/}
            {/*/>*/}

            {/*/meu conteúdo leonardo*/}
            <Container_Header>
                <TituloHeader_pgto>Emissão de Novas Faturas</TituloHeader_pgto>
                <BotaoHeader_pgto>Nova Fatura</BotaoHeader_pgto>
                <BotaoHeader_pgto>Voltar</BotaoHeader_pgto>
            </Container_Header>
            {/*/meu conteúdo leonardo*/}

            <ContainerFaturas>
                <Clientes/>
            </ContainerFaturas>
        </>
    );
}

export default MeiosDePagamentos;