import {Link} from "react-router-dom";
import Menu from "../componentes/Menu/Menu";

function App() {
  return (
    <>
      <Menu/>
      <h1> Meu cabeçalho </h1>
      <p className = "meu_p">um texto </p>
      <Link to="/teste">Clique aqui para ir para a página de Teste </Link>
    </>
   
  );
}

export default App;
