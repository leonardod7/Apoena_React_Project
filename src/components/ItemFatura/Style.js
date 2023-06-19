import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    font-family: 'Roboto', Sans-Serif, sans-serif;
    display: flex;
    align-items: center;
    max-width: 1100px;
    min-width: 280px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 10px;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
`;

const DivValor = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    padding: 10px;
    gap: 10px;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        flex-direction: row;
        width: 270px;
    };
`;

const Valor = styled.div`
    display: flex;
    width: 100px;
    justify-content: center;
    font-weight: bold;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 100%;
    };
`;

const Status = styled.div`
    display: flex;
    font-size: 0.8em;
    justify-content: space-around;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100px;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 130px;
    };
`;

const Datas = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
`;

const DataVencimento = styled.div`
`;

const DataCriacao = styled.div`
`;

const Tipo = styled.span`
    display: none;
    width: 180px;
    justify-content: center;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: flex;
        justify-content: center;
    };
`;

const Nome = styled.div`
    text-align: center;
    display: none;
  
    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: block;
    };
`;

const NomeTitulo = styled.div`
    text-align: center;
    font-weight: bold;
  
    @media screen and (min-width: ${Dispositivo.tablet}px) {
        display: none;
    };
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        grid-template-columns: repeat(4,1fr);
    };
`;

export {Container, NomeTitulo, Div, DivValor, Valor, Status, Datas, DataVencimento, DataCriacao, Tipo, Nome};