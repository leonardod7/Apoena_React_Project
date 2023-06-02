import { Container, Vetor, Periodo, VetorContainer, OpcoesContainer } from "./Style";
import Vector from "../../imagens/VectorNavBar.jpg";
import Filtro from "../../imagens/Button_Icon.png";
import Compartilhar from "../../imagens/Button_Icon(1).png";
import Download from "../../imagens/Button_Icon(2).png";


const ExtratoNavBar = () => (
    <Container>
        <Periodo>Julho de 2023</Periodo>
        <VetorContainer>
            <Vetor>
                <img src={Vector} />
            </Vetor>
        </VetorContainer>
        <OpcoesContainer>
            <img src={Filtro} />
            <img src={Compartilhar} />
            <img src={Download} />
        </OpcoesContainer>
    </Container>

);




export default ExtratoNavBar;