import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 312px;
    height: 50px;
    left: 0px;
    top: 43px;

    /* Color/B&W/White */
    background: #FFFFFF;
`;

const Descricao = styled.span`
    /* Título da conta */
    position: absolute;
    width: 126px;
    height: 14px;
    left: 16px;
    top: 12px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    /* identical to box height */

    /* Color/Primary/Branding */
    color: #5B1F53;
`;

const Valor = styled.span`

/* R$ 2.545,66 */

position: absolute;
width: 87px;
height: 19px;
right: 16px;
top: 8px;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 19px;

/* identical to box height */
text-align: right;

/* Color/Neutral/800 */
color: #383838;



`;

export {Container, Descricao, Valor};

