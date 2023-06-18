import { useState } from "react";
import Header from "../components/Header/Header";
import Saldo from "../components/Saldo/Saldo";
import { ContainerHome } from "./Style";
import ContasAgendadas from "../components/ContasAgendadas/ContasAgendadas";
import Comparativo from "../components/Comparativo/Comparativo";
import PopUpHome from "../components/PopUpHome/PopUpHome";
import Menu from "../components/Menu/Menu";
import Titulo from "../components/Titulo/Titulo";
import Icone from "../imagens/home.png";
import Checkout from "../components/Checkout/Checkout";

const Subtitulo =
  "Nesta seção você encontrará um resumo das informações financeiras da sua conta.";
const TemNavBar = false;

function App() {
  const [MenuAberto, setMenuAberto] = useState(true);
  const [CheckoutAberto, setCheckoutAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!MenuAberto);
  };

  const abrirCheckout = () => {
    setCheckoutAberto(true);
  };

  const fecharCheckout = () => {
    setCheckoutAberto(false);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} isOpen={MenuAberto} />

      <ContainerHome
        temNavBar={TemNavBar}
        className={MenuAberto ? "menuAberto" : ""}
      >
        <Saldo style="order:2" />
        <ContasAgendadas style="order:3" />
        <Comparativo style="order:4" />
        {CheckoutAberto && (
          <Checkout
            fecharCheckout={fecharCheckout}
            style={{ zIndex: 10 }} // Defina um valor alto de z-index para o Checkout
          />
        )}
        <PopUpHome abrirCheckout={abrirCheckout} style={{ zIndex: 5 }} /> {/* Defina um valor menor de z-index para o PopUpHome */}
      </ContainerHome>

      <Menu isOpen={MenuAberto} />

      <Titulo
        id="Home"
        icon={Icone}
        subtitulo={Subtitulo}
        temNavBar={TemNavBar}
        style="order:1"
        isOpen={MenuAberto}
      />
    </>
  );
}

export default App;
