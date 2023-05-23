import Menu from "../components/Menu/Menu";
import Comparativo from "../components/Comparativo/Comparativo";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
import { Titulo } from "../components/ContasAgendadas/Style";
import Icone from "../imagens/home.png"
import Header from "../components/Header/Header";
import Saldo from "../components/Saldo/Saldo";

function App() {
  return (
    <>
      <Header/>
      <Menu/>
        <Titulo
          id = "Home"
          icon = {Icone}
      />
      <Saldo/>
      <ContasAgendadas />
      <Comparativo />
    </>
    
  );
}

export default App;
