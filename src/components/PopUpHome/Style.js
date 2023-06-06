import styled from "styled-components";

const Conteiner = styled.div`
    position: absolute;
    width: 264px;
    height: 487px;
    left: 984px;
    top: 180px;

    background: #FFFFFF;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
`;

const DivGrafico = styled.div`
    position: absolute;
    width: 119.33px;
    height: 57.18px;
    left: 146.07px;
    top: 90.94px;
`;

const DivManHolding =  styled.div`
    left: 100%;
    position: relative;    
    width: 130.5px;
    height: 221.87px;
`;

const DivTexto = styled.div`
position: absolute;
width: 219px;
height: 98px;
left: 15px;
top: 235px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;

color: #3F3D56;
`;

const DivSino = styled.div`
    width: 22px;
    height: 22px;
    margin-left: 40px;
    margin-top: 200px;
`;

const DivSaibaMais = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 16px;
gap: 8px;

position: absolute;
width: 104px;
height: 30px;
left: 151px;
top: 438px;
`;

export {Conteiner, DivGrafico, DivManHolding, DivTexto, DivSino, DivSaibaMais} ;