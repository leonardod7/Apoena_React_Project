import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    max-width: 1100px;
    min-width: 280px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
`;

const DivValor = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        flex-direction: row;
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
    font-weight: bold;
    justify-content: center;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 110px;
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
`;

export {Container, DivValor, Valor, Status, Datas, DataVencimento, DataCriacao, Tipo, Nome};