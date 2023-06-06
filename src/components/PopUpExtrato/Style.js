import styled from "styled-components";

const Conteiner = styled.div`
    position: relative;
    width: 264px;
    height: 487px;
    left: 80%;
    bottom:100px

    background: #FFFFFF;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
`;

const DivGrafico = styled.div`
    position: relative;
    width: 119.33px;
    height: 57.18px;
    left: 20px;
    top: 40px;
`;

const DivManHolding =  styled.div`
    left: 150px;
    position: relative;    
    width: 130.5px;
    height: 221.87px;
`;

const DivTexto = styled.div`
    position: relative;
    width: 219px;
    height: 98px;
    left: 40px;
    top: 0px;
    margin-bottom: 50px;

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
    margin-left: 30px;
    margin-top: 10px;
`;

const DivSaibaMais = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 8px;
    bottom: 25px;
    left: 140px;

    width: 104px;
    height: 30px;
`;

export {Conteiner, DivGrafico, DivManHolding, DivTexto, DivSino, DivSaibaMais} ;