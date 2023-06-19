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
  BotaoAvancar,
  Input,
  InputDiv,
  FormularioDiv,
  TituloFormDiv,
  TextoForm
} from "./Style";
import Logo from "../../imagens/logo-gargo-premium-2.png";
import Cartao from "../../imagens/cartao-credito.png";
import GargoMobile from "../../imagens/gargoAPIMobile.png";
import Call from "../../imagens/call.png";

const Checkout = ({ fecharCheckout }) => {
  const [etapa, setEtapa] = useState(1);

  const avancarEtapa = () => {
    if (etapa < 4) {
      setEtapa(etapa + 1);
    }
  };

  const renderizarBeneficio = () => {
    switch (etapa) {
      case 1:
        return {
          icone: null,
          descricao:
            "O Gargo Premium é um serviço que combina cobrança estratégica e redução de custos para impulsionar a lucratividade da sua empresa."
        };
      case 2:
        return {
          icone: Cartao,
          descricao:
            "Passe a oferecer Pix, crédito e boleto com agilidade!"
        };
      case 3:
        return {
          icone: GargoMobile,
          descricao:
            "Tenha acesso a uma API personalizável, sem precisar de equipe de desenvolvimento."
        };
      case 4:
        return {
          icone: null,
          descricao: null
        };
      default:
        return null;
    }
  };

  const beneficio = renderizarBeneficio();

  const handleBotaoSairClick = () => {
    fecharCheckout(); // Chame a função fecharCheckout quando o botão "Sair" for clicado
  };

  const handleFinalizarPagamento = () => {
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
        {etapa === 4 && ""}
      </Titulo>
      {etapa === 1 &&(
        <BeneficioDiv>
          <BeneficioDescricao id="etapa 1">{beneficio.descricao}</BeneficioDescricao>
        </BeneficioDiv>
      )}

        {etapa > 1 && etapa < 4 &&(
        <BeneficioDiv>
          <BeneficioIcone id="etapa 2 ou 3">
            <img src={beneficio.icone} alt={beneficio.icone === null ? "":"Ícone do Benefício"} />
          </BeneficioIcone>
          <BeneficioDescricao>{beneficio.descricao}</BeneficioDescricao>
        </BeneficioDiv>
      )}
      {etapa === 4 && beneficio.icone === null && beneficio.descricao === null && (

        <FormularioDiv>
            <TituloFormDiv>
              <BeneficioIcone id="formulario">
                <img src={Call} alt = "Contato"/>
              </BeneficioIcone>
              <TextoForm>Envie sua solicitação de contrato e responderemos suas dúvidas.</TextoForm>
            </TituloFormDiv>
            <InputDiv>
              <Input type="text" id="numeroCartao" name="solicitante" placeholder="Nome Completo" required />
              <Input type="text" id="nomeCartao" name="email" placeholder="Melhor E-mail:" required />
            </InputDiv>
            <NavegarCardDiv>
              <BotaoSair onClick={handleBotaoSairClick} id="solicitacao">Sair</BotaoSair>
              <BotaoAvancar onClick={avancarEtapa} id="solicitacao">Enviar Solicitação</BotaoAvancar>
            </NavegarCardDiv>
        </FormularioDiv>
      )}

      {etapa < 4 &&(
        <NavegarCardDiv>
          <BotaoSair onClick={handleBotaoSairClick}>Sair</BotaoSair>
          <BotaoAvancar onClick={avancarEtapa}>Proximo</BotaoAvancar>
        </NavegarCardDiv>
      )}
    </Container>
  );
};

export default Checkout;
