import styled from "styled-components";


const Container = styled.div`
    height: 64px;
    background: #FFFFFF;
    width: 70%;
    position: absolute;
    top: 150px;
    margin-left: 20px;
    padding-top: 10px;
    padding-left:20px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: nowrap;  
    
    &.menuAberto {
        margin-left: 20%; /* Ajuste o valor conforme necessário */
    };
`;

const Periodo = styled.span`
    /* Junho 2022 */

    height: 19px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* identical to box height */

    /* Color/Primary/Branding */
    color: #5B1F53;
`;

const VetorContainer = styled.div`
    width: 24px;
    height: 24px;
`;

const Vetor = styled.div`
    /* Vector */

`;

const OpcoesContainer = styled.div`
    width: 200px;
    height: 10px;
`;

const ContainerEspaco = styled.div`
    width: 40%;
`;


export {Container, Periodo, VetorContainer, Vetor, OpcoesContainer, ContainerEspaco};