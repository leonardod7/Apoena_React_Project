import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    display: flex;
    max-width: 900px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    gap: 10px;
`;

const Cabecalho = styled.div`
    display: flex;
    max-width: 900px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: normal;
    gap: 10px;
    position: relative;
    padding-left: 0%;
    padding-top: 50px;
`;

const Nome = styled.span`
    width: 25%;
    justify-content: right;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 20%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Email = styled.span`
    width: 50%;
    justify-content: left;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };
    
    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 30%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const DataCriacao = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
        width: 25%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Botao = styled.button`
    width: 25%;
    justify-content: right;
    background-color: light grey;
    color: #5B1F53;
    width: 100px;
    height: 30px;
    border-color: white;
    border-radius: 20px;
    margin-left: 10px;
`;

export {Container, Cabecalho, Nome, Email, DataCriacao, Botao};