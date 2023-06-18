import styled from "styled-components";
import Dispositivo  from "../../utils";

const Container = styled.div`
    position: absolute;
    background-color: #e1e1ff;
    width: 950px;
    height: 600px;
    left:200px;
    bottom:300px;
    top: 50px;
    border-radius:10px;


   /*@media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 100%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 50%;
    };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
        width: 25%;
        height: 50%;
        left:10%;
        bottom:20%;
        top: 10%;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width:100%;
        height: 50%;
        left:10%;
        bottom:20%;
        top: 10%;
    };*/
`;
const Container2 = styled.div`
    position: absolute;
    background-color: #320019;
    width: 500px;
    height: 100px;
    left:50px;
    bottom:300px;
    top: 300px;
    border-radius: 10px;
`;
const AdicionarItem = styled.div`
    position: absolute;
    background-color: blue;
    width: 120px;
    height: 25px;
    left:80px;
    bottom:300px;
    top: 415px;
    text-align: center;
`;
const Salvar = styled.div`
    position: absolute;
    background-color: greenyellow;
    width: 120px;
    height: 25px;
    left:800px;
    bottom:100px;
    text-align: center;
`;
const MetodoPagamento = styled.div`
    position: absolute;
    background-color: #320019;
    width: 500px;
    height: 100px;
    left:50px;
    bottom:50px;
    border-radius: 10px;
`;
export {Container,Container2,AdicionarItem,Salvar,MetodoPagamento} 