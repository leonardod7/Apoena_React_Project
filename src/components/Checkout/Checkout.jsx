import {Container, Titulo, LogoSpan, BeneficioDiv, BeneficioIcone, BeneficioDescricao,BotaoDiv, BotaoContratacao, NavegarCardDiv, BotaoSair, BotaoAvancar} from "./Style";
import Logo from "../../imagens/logo-gargo-premium.png";
import Engrenagem from "../../imagens/engrenagem-checkout.png";
import Relogio from "../../imagens/relogio-checkout.png";
import Cartao from "../../imagens/cartao-credito-checkout.png";

const Checkout = () => {

    return(
        <Container>
            <LogoSpan>
                <img src = {Logo} />
            </LogoSpan>
            <Titulo>
                PAGAMENTO RÁPIDO E FÁCIL
            </Titulo>
            <BeneficioDiv>
                <BeneficioIcone>
                    <img src = {Cartao} />
                </BeneficioIcone>
                <BeneficioDescricao>
                Com Gargo Premium você oferece Pix, crédito e boleto com agilidade!
                </BeneficioDescricao>
            </BeneficioDiv>
            <BotaoDiv>
                <BotaoContratacao>
                    CONTRATE AGORA!
                </BotaoContratacao>
            </BotaoDiv>
            <NavegarCardDiv>
                <BotaoSair>
                    Sair
                </BotaoSair>
                <BotaoAvancar>
                    >>
                </BotaoAvancar>
            </NavegarCardDiv>
        </Container>

    );

};

export default Checkout;