import styled from "styled-components";

const Container_Header = styled.div`
    width: 100%;
    display: flex;
    //border: 1px solid red;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
`;


const TituloHeader_pgto = styled.h1`
    font-family: 'ROBOTO';
    font-size: 18px;
    color: #5B1F53;
`;

const BotaoHeader_pgto = styled.button`
    background-color: #5B1F53;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    margin-left: 10px;
`;
//
// const hr_header = styled.hr`
//     border: 1px solid gray;
//     color: #5B1F53;
// `;



export {Container_Header, TituloHeader_pgto, BotaoHeader_pgto}
