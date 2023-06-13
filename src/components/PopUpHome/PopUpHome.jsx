import {Conteiner, DivGrafico, DivManHolding, DivTexto, DivSino, DivSaibaMais} from "./Style";
import ImagePopUp from "../../imagens/ManHoldingGraphic.png";
import GraficoPopUp from "../../imagens/graficoPopUp.png";
import SinoPopUp from "../../imagens/PopUpIcon.png"
import SaibaMaisPopUp from "../../imagens/Button.png"
import {useState} from "react";

function PopUpHome({abrirCheckout}) {

    const handleSaibaMaisClick = () =>{
        abrirCheckout(); //Chamar o Componente CheckOut quando Saiba Mais for clicado.
    };

    return (
        <Conteiner>

            <DivGrafico>
                <img src = {GraficoPopUp} />
            </DivGrafico>
                
            <DivManHolding>
                <img src = {ImagePopUp} />
            </DivManHolding>

            <DivTexto>
                <p> Com o gargo premium você ganha mais controle das suas finanças...Contrate já. </p>
            </DivTexto>

            <DivSino>
                <img src = {SinoPopUp} />
            </DivSino>

            <DivSaibaMais>
                <img src = {SaibaMaisPopUp} onClick = {handleSaibaMaisClick}/>
            </DivSaibaMais>

        </Conteiner>
    );
} 

export default PopUpHome;