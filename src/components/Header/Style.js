import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #5B1F53;
    width: 100%;
    height: 64px;
    left: 0px;
    top: 0px;
`;
const Titulo = styled.div`
    position:absolute;
    padding-right: 1146px;
    padding-left: 59px;
    width: 43px;
    height: 19px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;
const Vmenu = styled.div`
    padding-right: 1216px;
    padding-left: 24px;

`;
const Vperfil = styled.div`
    position: absolute;
    padding-right: 5%;
    padding-left: 1216px;

`;
const Vsino = styled.div`
    position: absolute;
    padding-right: 76px;
    padding-left: 1164px;

`;

export {Container,Vmenu,Vperfil,Vsino,Titulo};