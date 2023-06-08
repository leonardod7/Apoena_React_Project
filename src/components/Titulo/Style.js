import styled from "styled-components";
import Dispositivo from "../../utils";
const SpanTitulo = styled.span`
    width: 250px;
    height: 28px;
    font-family: 'ROBOTO';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #5B1F53;
    margin-right: 50%;
`;

const Container = styled.div`
    top: 64px;
    position: absolute;
    gap: 2px;  
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-bottom: 80px;
    margin: 20px;

    &.menuAberto {
        margin-left: 20%; /* Ajuste o valor conforme necessário */
      };

`;

const Icone = styled.div`
    width: 28px;
`;

const Subtitulo = styled.span`
    height: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    width: 70%;


    /* Color/Neutral/400 */
    color: #BFBFBF;
`;





export {SpanTitulo, Container,Icone, Subtitulo};