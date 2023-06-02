import styled from "styled-components";


const Container = styled.div`
    position: relative;
    width: 1008px;
    height: 64px;
    left: 300px;
    top: 64px;
    background: #FFFFFF;
`;

const Periodo = styled.span`
    /* Junho 2022 */

    position: absolute;
    height: 19px;
    left: 43px;
    top: 24px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* identical to box height */

    /* Color/Primary/Branding */
    color: #5B1F53;
`;

const VetorContainer = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    top: 10px;
    left: 180px;
`;

const Vetor = styled.div`
    /* Vector */

    position: absolute;
    left: 26.72%;
    right: 26.72%;
    top: 63.72%;
    bottom: 8.84%;
`;

const OpcoesContainer = styled.div`
    position: relative;
    width: 200px;
    height: 10px;
    top: 10px;
    left: 800px;
`;


export {Container, Periodo, VetorContainer, Vetor, OpcoesContainer};