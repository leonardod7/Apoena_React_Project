import styled from "styled-components";
import Dispositivo from "../../utils";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    padding-top: 20px;
    left: 40px;
    top: 100px;
    gap:80px;
 
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    transition: flex-grow 0.3s ease-in-out;


    @media screen and (min-width: ${Dispositivo.desktop}px) {
        height: auto;
        position: absolute;
        max-width: 1100px;
        left: 17px;
        top: 15px;
        background: #9747FF;
        border-radius: 17px;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        position: absolute;
        width: 288px;
        height: auto;
        left: 17px;
        top: 15px;
        background: #9747FF;
        border-radius: 17px;
    };
`;

const LogoSpan = styled.span`
    width: 187px;
    height: 61px;
    padding-top: 10px;
`;


const Titulo = styled.span`



    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        /* PAGAMENTO RÁPIDO E FÁCIL */

        width: 238px;
        height: 46px;        

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #F1F1F1;
    };
`;

const BeneficioDiv = styled.div`
    width: 100%;
    height: 88px;
`;

const BeneficioIcone = styled.span`
    /* Vector */
    position: relative; 
    left: 11.25%;
    right: 57.08%;

`;

const BeneficioDescricao = styled.span`
    /* Com Gargo Premium você oferece Pix, crédito e boleto com agilidade! */


    width: 144px;
    height: 87.88px;
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14.8235px;
    line-height: 17px;
    color: #F1F1F1;
    display: inline-block;
    left: 40px;
`;

const BotaoDiv = styled.div`
    width: 230px;
    height: 47px;
    padding-bottom: 10px;
`;

const BotaoContratacao = styled.button`
    /* CONTRATE AGORA! */

    width: 230px;
    height: 47px;

    background: #FF7940;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
`;

const NavegarCardDiv = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    justify-content: space-between;
`;


const BotaoSair = styled.span`
    /* Sair */

    width: 42px;
    height: 21px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #F1F1F1;
`;

const BotaoAvancar = styled.span`

    /* >> */

    width: 42px;
    height: 21px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #F1F1F1;

`;

export {
    Container,
    LogoSpan,
    Titulo,
    BeneficioDiv,
    BeneficioIcone,
    BeneficioDescricao,
    BotaoDiv,
    BotaoContratacao,
    NavegarCardDiv,
    BotaoAvancar,
    BotaoSair
};