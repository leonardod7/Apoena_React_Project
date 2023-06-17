import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    display: flex;
    max-width: 1100px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    gap: 10px;

    @media screen and (max-width: ${Dispositivo.tablet}px) {
        position: relative;
        width: 100%;
        padding: 10px;
        background-color: #f1f1f1;
        margin-bottom: 10px;
        border-radius: 5px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Cabecalho = styled.div`
    display: flex;
    max-width: 1100px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: normal;
    gap: 10px;
    position: relative;
    padding-left: 0%;
    padding-top: 50px;
`;

const Valor = styled.span`
    width: 20%;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 10%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 15%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Status = styled.span`
    width: 30%;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 15%;
    };
    
    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 20%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
        width: 25%;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Codigo = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        display: block;
        width: 10%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
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
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
        display: block;
        width: 20%;
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
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 15%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
        width: 20%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Nome = styled.span`
    width: 50%;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 16%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 25%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
        width:35%;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

export {Container, Cabecalho, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome};