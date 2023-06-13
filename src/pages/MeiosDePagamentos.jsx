import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/meios_de_pagamentos.png";
import Faturas from "../components/Faturas/Faturas";
import {ContainerFaturas} from "./Style";
import { useState } from "react";

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
            <Titulo
                id = "Meios de Pagamentos"
                icon = {Icone}
                subtitulo = {Subtitulo}
                temNavBar = {TemNavBar}
                isOpen = {MenuAberto}
            />
            <ContainerFaturas>
                <Faturas/>
            </ContainerFaturas>
        </>
    );
}

export default MeiosDePagamentos;