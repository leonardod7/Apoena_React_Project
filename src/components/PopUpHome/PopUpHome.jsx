import {Conteiner, DivGrafico, DivManHolding, DivTexto, DivSino, DivSaibaMais} from "./Style";
import ImagePopUp from "../../imagens/ManHoldingGraphic.png";
import GraficoPopUp from "../../imagens/graficoPopUp.png";
import SinoPopUp from "../../imagens/PopUpIcon.png"
import SaibaMaisPopUp from "../../imagens/Button.png"

function PopUpHome() {
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
                <img src = {SaibaMaisPopUp} />
            </DivSaibaMais>

        </Conteiner>
    );
} 

export default PopUpHome;