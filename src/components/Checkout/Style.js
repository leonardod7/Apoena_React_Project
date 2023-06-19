import styled from "styled-components";
import Dispositivo from "../../utils";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    transition: flex-grow 0.3s ease-in-out;
    background: #FFFFFF;
    border-radius: 17px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    box-shadow: 0px 3px 3px 3px; rgba(91, 31, 83, 0.5);


  @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    width: 90%;
    height: auto;
    min-height: 478px;
    max-width: 840px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;

  }


`;

const LogoSpan = styled.span`
    width: 187px;
    height: 61px;
    padding-top: 20px;
`;

const Titulo = styled.span`

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        /* PAGAMENTO RÁPIDO E FÁCIL */

        width: 238px;
        height: 46px;        

        font-family: 'Roboto', Sans-Serif;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #F1F1F1;
    };
`;

const BeneficioDiv = styled.div`
    width: 90%;
    max-width:500 px;
    height: auto;
    position: relative;
    bottom: 50px;  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;


    @media screen and (min-width: ${Dispositivo.mobile}px) {
        bottom: 0;

    }

    &[id="etapa 4"]{
        display:none;
    };
`;

const BeneficioIcone = styled.span`
    /* Vector */
    position: relative; 
    width: 100%;

    &[id="formulario"]{
        width: 35%;
        display: grid;
        justify-content: center;
    }];

    &[id="etapa 2 ou 3"]{
        margin-bottom: 25px;
        justify-content: center;
        display: flex;
    };

`;

const BeneficioDescricao = styled.span`
    font-family: 'Roboto', Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #3F3D56;
    text-align: justify;

`;

const FormularioDiv = styled.span`
    background: #BB92B5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px 25px 17px 17px;
    height: 280px;
    width: 95%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    margin-bottom: 20px;
    position: static;

    &[id="form-desktop"]{
        position:absolute;
        width: 75%;
        right: 30%;
        top: 50%;
    };


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
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
`;


const BotaoSair = styled.span`
    /* Sair */

    &[id="solicitacao"]{
        position:relative;
        top: 5px;
    }
    
    width: 42px;
    height: 21px;

    font-family: 'Roboto', Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #5B1F53;
`;

const BotaoAvancar = styled.span`

    /* >> */

    width: 42px;
    height: 21px;

    font-family: 'Roboto', Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    &[id="geral"]{
        position: static;
    };

    
    color: #5B1F53;

    &[id="solicitacao"]{
        background: #5B1F53;
        border-radius: 21px;
        width: 129px;
        height: 30px;   
        font-family: 'Roboto', Sans-Serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        /* Color/B&W/White */
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        position:static;


        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        };
    
    &[id="desktop"]{
        background: #5B1F53;
        border-radius: 21px;
        width: 129px;
        height: 30px;   
        font-family: 'Roboto', Sans-Serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        /* Color/B&W/White */
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;

        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        };
        position: absolute;
        left: 82.5%;
        top: 90.6%;
        z-index: 9999;
    };
    
`;

const Input = styled.input`

    background: #FFFFFF;
    border-radius: 5px;
    width:90%;
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
}
`;

const TextoForm = styled.span`
    font-family: 'Roboto', Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    width: 65%;
    max-width:250px;
    color: #FFFFFF;
`;

const TituloFormDiv = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

    `;

const ContainerDesktop = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    transition: flex-grow 0.3s ease-in-out;
    background: #FFFFFF;
    border-radius: 17px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    box-shadow: 0px 3px 3px 3px; rgba(91, 31, 83, 0.5);


    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    width: 90%;
    height: auto;
    min-height: 478px;
    max-width: 840px;
    z-index: 9997;
    display: flex;
    align-items: center;
    justify-content: center;

}
`;

const DivBloqueio = styled.div`
    background-color: white;
    width: 117px;
    height: 40px;
    position: absolute;
    top: 90%;
    left: 83%;

    &[id="fechar"]{
        top: 5%;
        left: 90%;
    };
`;


export {
    DivBloqueio,
    ContainerDesktop,
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
    BotaoSair,
    Input,
    InputDiv,
    FormularioDiv,
    TituloFormDiv,
    TextoForm
};