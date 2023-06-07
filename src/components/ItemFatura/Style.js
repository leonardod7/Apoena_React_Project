import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: normal;
    gap: 10px;

`;

const Valor = styled.span`


    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 10%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width: 10%;
    };
`;

const Status = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 15%;
    };
    
    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        
    };
`;

const Codigo = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 7%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const DataVencimento = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 17%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const DataCriacao = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        display: block;
        width: 17%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        
    };
`;

const Tipo = styled.span`
    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 14%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };


    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Nome = styled.span`
    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 20%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

export {Container, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome};