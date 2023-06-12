
import {ContainerHome} from "./Style";
import Menu from "../components/Menu/Menu";
import Comparativo from "../components/Comparativo/Comparativo";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/home.png"
import Header from "../components/Header/Header";
import Saldo from "../components/Saldo/Saldo";
import { useState } from "react";
import PopUpHome from "../components/PopUpHome/PopUpHome";

const Subtitulo = "Nesta seção você encontrará um resumo das informações financeiras da sua conta."
const TemNavBar = false;

function App() {

  const [MenuAberto, setMenuAberto] = useState(true);

  const toggleMenu = () => {
    setMenuAberto(!MenuAberto);
  };


  return (
    <>
      <Header
        toggleMenu = {toggleMenu}
        isOpen = {MenuAberto}  
      />
          
      <ContainerHome
        temNavBar = {TemNavBar}
        className={MenuAberto ? "menuAberto" : ""}
      >
        <Saldo style = "order:2"/>
        <ContasAgendadas style = "order:3"/>
        <Comparativo style = "order:4" />
        <PopUpHome/>
      </ContainerHome>

      <Menu
       isOpen = {MenuAberto}
       />
       
      <Titulo
        id = "Home"
        icon = {Icone}
        subtitulo = {Subtitulo}
        temNavBar = {TemNavBar}
        style = "order:1"
        isOpen = {MenuAberto}
      />
    </>
  );

}

export default App;
