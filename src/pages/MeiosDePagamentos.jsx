import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
//import Titulo from "../components/Titulo/Titulo";
//import Icone from "../imagens/meios_de_pagamentos.png";
import Faturas from "../components/Faturas/Faturas";
import Clientes from "../components/Clientes/Clientes";
import {ContainerFaturas} from "./Style";
import { useState } from "react";
import HeaderPage from "../components/Header_MeiosPGTO/HeaderPgto";
import {BotaoHeader_pgto, Container_Header, TituloHeader_pgto} from "../components/Header_MeiosPGTO/Style";


const Subtitulo = "";
const TemNavBar = false;

const MeiosDePagamentos = () => {

    const [MenuAberto, setMenuAberto] = useState(true);

    const toggleMenu = () => {
        setMenuAberto(!MenuAberto);
      };
    
    return (
        <>
            <Header toggleMenu = {toggleMenu}/>
            <Menu isOpen = {MenuAberto}/>

            <Container_Header className={MenuAberto ? "menuAberto" : ""}>
                <TituloHeader_pgto>Emissão de Novas Faturas</TituloHeader_pgto>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BotaoHeader_pgto>Nova Fatura</BotaoHeader_pgto>
                    <BotaoHeader_pgto>Voltar</BotaoHeader_pgto>
                </div>
            </Container_Header>

            <ContainerFaturas className={MenuAberto ? "menuAberto" : ""}>
                <Faturas/>
            </ContainerFaturas>
        </>
    );
}

export default MeiosDePagamentos;