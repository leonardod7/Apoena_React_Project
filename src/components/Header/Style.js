import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: end;
    background-color: #5B1F53;
    width: 100%;
    height: 64px;
    padding-right: 10%;
`;
const Titulo = styled.div`
    width: 43px;
    height: 19px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

const Vmenu = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;



const SubContainer = styled.div`
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    
    
`;

const Vperfil = styled.div`
    width: 40px;
    height: 40px;
    padding-top: 10px;
    


`;
const Vsino = styled.div`
    width: 40px;
    height: 40px;
`;

export {Container,SubContainer,Vmenu,Vperfil,Vsino,Titulo};