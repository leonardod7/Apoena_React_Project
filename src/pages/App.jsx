<<<<<<< HEAD
import {Link} from "react-router-dom";
import Menu from "../componentes/Menu/Menu";
=======
import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Comparativo from "../components/Comparativo/Comparativo";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
>>>>>>> gripa

function App() {
  return (
    <>
    <Menu/>
    <h1>Meu cabeçalho</h1>
    <p className="meu_p">um texto</p>
    <Link to="/teste">Clique para ir par a página de teste</Link>
    <br /><br /><br />
    <ContasAgendadas />
    <Comparativo />
    </>
    
  );
}

export default App;
