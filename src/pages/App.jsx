import Menu from "../components/Menu/Menu";
import Comparativo from "../components/Comparativo/Comparativo";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/home.png"
import Header from "../components/Header/Header";
import Saldo from "../components/Saldo/Saldo";

const Subtitulo = "Nesta seção você encontrará um resumo das informações financeiras da sua conta."
const TemNavBar = false;

function App() {

  return (
    <>
      <Header/>
      <Menu/>
      <Titulo
        id = "Home"
        icon = {Icone}
        subtitulo = {Subtitulo}
        temNavBar = {TemNavBar}
      />
      <Saldo/>
      <ContasAgendadas />
      <Comparativo />
   
    </>
    
  );
}

export default App;
