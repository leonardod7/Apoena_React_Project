import React, { useState } from "react";
import {
  Container,
  Titulo,
  LogoSpan,
  BeneficioDiv,
  BeneficioIcone,
  BeneficioDescricao,
  BotaoDiv,
  BotaoContratacao,
  NavegarCardDiv,
  BotaoSair,
  BotaoAvancar
} from "./Style";
import Logo from "../../imagens/logo-gargo-premium.png";
import Engrenagem from "../../imagens/engrenagem-checkout.png";
import Relogio from "../../imagens/relogio-checkout.png";
import Cartao from "../../imagens/cartao-credito-checkout.png";

const Checkout = ({ fecharCheckout }) => {
  const [etapa, setEtapa] = useState(1);

  const avancarEtapa = () => {
    if (etapa < 3) {
      setEtapa(etapa + 1);
    }
  };

  const renderizarBeneficio = () => {
    switch (etapa) {
      case 1:
        return {
          icone: Cartao,
          descricao:
            "Com Gargo Premium você oferece Pix, crédito e boleto com agilidade!"
        };
      case 2:
        return {
          icone: Engrenagem,
          descricao:
            "Implementação facilitada para integração rápida e eficiente!"
        };
      case 3:
        return {
          icone: Relogio,
          descricao:
            "Acompanhe suas faturas em tempo real e tenha controle total!"
        };
      default:
        return null;
    }
  };

  const beneficio = renderizarBeneficio();

  const handleBotaoSairClick = () => {
    fecharCheckout(); // Chame a função fecharCheckout quando o botão "Sair" for clicado
  };

  return (
    <Container>
      <LogoSpan>
        <img src={Logo} alt="Logo" />
      </LogoSpan>
      <Titulo>
        {etapa === 1 && "PAGAMENTO RÁPIDO E FÁCIL"}
        {etapa === 2 && "IMPLEMENTAÇÃO FACILITADA"}
        {etapa === 3 && "FATURAS EM TEMPO REAL"}
      </Titulo>
      <BeneficioDiv>
        <BeneficioIcone>
          <img src={beneficio.icone} alt="Ícone do Benefício" />
        </BeneficioIcone>
        <BeneficioDescricao>{beneficio.descricao}</BeneficioDescricao>
      </BeneficioDiv>
      <BotaoDiv>
        <BotaoContratacao>CONTRATE AGORA!</BotaoContratacao>
      </BotaoDiv>
      <NavegarCardDiv>
        <BotaoSair onClick={handleBotaoSairClick}>Sair</BotaoSair>
        <BotaoAvancar onClick={avancarEtapa}>&gt;&gt;</BotaoAvancar>
      </NavegarCardDiv>
    </Container>
  );
};

export default Checkout;
