import styled from "styled-components";

const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 272px;
    height: 265px;
    border-radius: 25px;
    background-color: lightgrey;
`;

const MeuIcone = styled.div`
    width: 40px;
    height: 40px;
    
    margin-left: 24px;
    margin-top: 24px;
    margin-right: 100%;
`;

const Nome = styled.div`
    width: 154px;
    height: 23px;
    margin-left: 40px;
    margin-top: 10px;

    font-family: 'Roboto', Sans-Serif, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #5B1F53;
`;
const Conta = styled.div`
    width: 82px;
    height: 14px;
    margin-left: 40px;

    font-family: 'Roboto', Sans-Serif, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #2AB9D4
`;
const Seletor1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px 8px 40px;
    gap: 24px;

    width: 272px;
    height: 40px;
`;

const Seletor2 = styled.div`    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px 8px 40px;
    gap: 24px;

    width: 272px;
    height: 40px;
`;

export {Caixa, MeuIcone, Nome, Conta, Seletor1, Seletor2};