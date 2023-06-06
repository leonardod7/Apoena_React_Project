import Extrato from "../components/Extrato/Extrato";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/extrato.png";
import {ContainerExtrato} from "./Style";
import { useState } from "react";
import PopUpExtrato from "../components/PopUpExtrato/PopUpExtrato"

const Transacoes = () => (
    <>
        <Header/>
        <Menu/>
        <Titulo
            id = "Extrato"
            icon = {Icone}
        />

    <Extrato />
    </>
);


const Transacoes = () => {

    const [MenuAberto, setMenuAberto] = useState(true);

    const toggleMenu = () => {
        setMenuAberto(!MenuAberto);
      };    

    return(

        <>
            <Header toggleMenu = {toggleMenu}/>
            <Menu isOpen = {MenuAberto}/>
            <Titulo
                id = "Extrato"
                icon = {Icone}
                subtitulo = {Subtitulo}
                temNavBar = {TemNavBar}
                isOpen = {MenuAberto}
            />
            <ExtratoNavBar 
                isOpen = {MenuAberto}    
            />
            <ContainerExtrato temNavBar = {TemNavBar} className={MenuAberto ? "menuAberto" : ""}>
                <Extrato />
                <PopUpExtrato />
            </ContainerExtrato>
        
        
        </>
    );
}
export default Transacoes;