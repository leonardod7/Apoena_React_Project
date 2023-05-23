import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Titulo from "../components/Titulo/Titulo";

function App() {
  return (
    <>
      <Menu/>
      <h1>Meu cabeçalho</h1>
      <p className="meu_p">um texto</p>
      <Link to="/teste">Clique para ir par a página de teste</Link>
      <Titulo
        id="Home"
      />
    </>
  
  );
}

export default App;
