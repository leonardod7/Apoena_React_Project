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

const Nome = styled.span`
    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Email = styled.span`
    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };
    
    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const DataCriacao = styled.span`
    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

export {Container, Cabecalho, Nome, Email, DataCriacao};