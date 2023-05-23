import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Comparativo from "../components/Comparativo/Comparativo";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
import { Titulo } from "../components/ContasAgendadas/Style";
import Icone from "../imagens/home.png"

function App() {
  return (
    <>
      <Menu/>
      <Titulo
          id = "Home"
          icon = {Icone}
      />
      <ContasAgendadas />
      <Comparativo />
    </>
    
  );
}

export default App;
