import styled from "styled-components";
import Dispositivo  from "../../utils";

const input_data= {
    width: '100%',
    height: '20%',
    backgroundColor:'#4CAF50',
    color: 'white',
    /*padding: '14px 20px',*/
    margin: '0px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',

    '@media screen and (max-width: 480px)': {
    margin:'20rem',
    width: '100%',
    height: '200px',
    }
};

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    margin-left: 10%;
    justify-content: center;
    font-size:15px;

    @media screen and (max-width: 1080px){
        font-size:20px;
        height: 100%;
        width: 80%;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
        height: 100%;
        width: 80%;
        justify-content: center;
        margin-bottom:10px;
}
`;
const Field = styled.div`
    @media screen and (max-width: 480px) {
        height: 200px;
        margin-left: 25px;
        margin-top: 4rem;
        align-items: center;
}
`;
const Container = styled.div`
    background-color: #e1e1ff;
    width: 75%;
    height: 90%;
    left: 10%;
    top: 10%;
    border-radius:10px;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.5);

    &.oculto {
        display: none;
    }

    &.visivel {
        display: block;
    }
`;

const Enviar = styled.div`
    background-color: grey;
    width: 80%;
    height: 10%;
    left:10%;
    bottom:10px;
    border-radius:8px;
    text-align: center;
/*
    @media screen and (max-width: 1080px){
        left:0%;
        width:100%;
        height:10%;
        justify-content:center;
        font-size:30px;
    }

    @media screen and (max-width: 480px) {
        width: 600px;
        height: 100px;
        font-size: 40px;
  }*/
`;
const Sair= styled.div`
    width: 30px;
    height: 30px;
    background-color:#f1f1f1;
    left: 900px;
    top: 25px;
    border-radius: 20px;
    vertical-align:bottom;

    @media screen and (max-width: 480px) {
        left: 400px;
  }
`;
const Titulo = styled.div`
    text-align: center;
    left: 20px;
    font-size:25px;

    @media screen and (max-width: 1080px){
        font-size:20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 35px;
        bottom:1350px;
  }
`;
export {Container,Enviar,Sair,Titulo,Formulario,Field,input_data}
