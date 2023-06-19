import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    max-width: 900px;
    width: 70vw;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        flex-direction: row;
    };
`;

const Pessoa = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        flex-direction: row;
    };
`;

const Nome = styled.span`
    justify-content: space-around;
    min-width: 100px;
`;

const Email = styled.span`
    width: 200px;
    justify-content: left;
`;

const DataCriacao = styled.span`
    display: none;

    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
        width: 100px;
    };
`;

const Botao = styled.button`
    justify-content: right;
    background-color: light grey;
    color: #5B1F53;
    width: 100px;
    height: 30px;
    border-color: white;
    border-radius: 20px;
    margin-left: 10px;
`;

export {Container, Pessoa, Nome, Email, DataCriacao, Botao};