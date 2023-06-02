import styled from "styled-components";

const SpanTitulo = styled.span`
position: absolute;
width: 65px;
height: 28px;
left: 348px;
top: 88px;

font-family: 'ROBOTO';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;

color: #5B1F53;

`;

const Container = styled.div`

    position: ${page => (page.temNavBarSc ? 'relative' : '')};
    bottom: ${page => (page.temNavBarSc ? '600px' : '')};
    display: flex;
    flex-direction: row;
    gap: 2px;  
    flex-wrap: wrap;
    justify-content:flex-end;
    width: 10px;
    border: 1px;   
`;

const Icone = styled.div`
position: absolute;
width: 65px;
height: 28x;
left: 320px;
top: 92px;


`;

const Subtitulo = styled.span`

    position: absolute;
    width: 439px;
    height: 16px;
    left: 316px;
    top: 120px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    /* Color/Neutral/400 */
    color: #BFBFBF;

`;





export {SpanTitulo, Container,Icone, Subtitulo};