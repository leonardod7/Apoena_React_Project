import styled from "styled-components";
import Dispositivo  from "../../utils";
import React, { useState } from 'react';

const Container = styled.div`
    background-color: #e1e1ff;
    width: 80%;
    height: 90%;
    left:10%;
    top: 5%;
    border-radius:10px;
    border: 2px solid black;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.5);
`;

const Container2 = styled.div`
    background-color: #320019;
    width: 80%;
    height: 35%;
    left:1%;
    bottom:30%;
    border-radius: 10px;
    border: 2px solid black;

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width:70%;
        height:25%;
        left:10%;
        bottom:35%;
    };
`;

const AdicionarItem = styled.div`
    background-color: blue;
    width: 120px;
    height: 25px;
    left: 20%;
    bottom: 22%;
    text-align: center;
    border: 3px solid black;
`;

const Salvar = styled.div`
    background-color: greenyellow;
    width: 120px;
    height: 25px;
    left:75%;
    bottom:10%;
    text-align: center;

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width:50px;
        height: 50px;
        left:75%;
        bottom:10%;
    };
`;

const MetodoPagamento = styled.div`
    background-color: #320019;
    width: 50%;
    height: 15%;
    left:50px;
    bottom:5%;
    border-radius: 10px;
    border: 2px solid black;
`;

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleMenu} style={{paddingTop:"10px",width:"100%",backgroundColor:"#f1f1f1"}}>
          Método De Pagamento
        </button>
        {isOpen && (
          <div className="dropdown-content" style={{backgroundColor:"#ffff"}}>
            <p>Pix</p>
            <p>Cartão De Crédito</p>
            <p>Boleto</p>
          </div>
        )}
      </div>
    );
  }
  
export {Container,Container2,AdicionarItem,Salvar,MetodoPagamento,Dropdown} 