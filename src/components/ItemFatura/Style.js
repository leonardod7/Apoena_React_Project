import styled from "styled-components";
import Dispositivo from "../../utils";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;



    @media screen and (min-width: ${Dispositivo.desktop}px) {
    };
  
    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
    };
`;

const Valor = styled.span`
    width: 10%;
`;

const Status = styled.span`
    width: 15%;
`;

const Codigo = styled.span`
    width: 7%;
`;

const DataVencimento = styled.span`
    width: 17%;
`;

const DataCriacao = styled.span`
    width: 17%;
`;

const Tipo = styled.span`
    width: 14%;
`;

const Nome = styled.span`
    width: 20%;
`;

export {Container, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome};