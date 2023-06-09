import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    gap: 10px;
`;

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: normal;
    gap: 10px;
    position: relative;
    padding-left: 10%;
    padding-top: 150px;
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
        width:30%;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

export {Container, Cabecalho, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome};