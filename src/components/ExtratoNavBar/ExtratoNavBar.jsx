import { Container, Vetor, Periodo, VetorContainer, OpcoesContainer, ContainerEspaco} from "./Style";
import Vector from "../../imagens/VectorNavBar.jpg";
import Filtro from "../../imagens/Button_Icon.png";
import Compartilhar from "../../imagens/Button_Icon(1).png";
import Download from "../../imagens/Button_Icon(2).png";


const ExtratoNavBar = (page) => (
    <Container className={page.isOpen ? "menuAberto" : ""}>
        <Periodo>Julho de 2023</Periodo>
        <VetorContainer>
            <Vetor>
                <img src={Vector} />
            </Vetor>
        </VetorContainer>
        <ContainerEspaco></ContainerEspaco>
        <OpcoesContainer>
            <img src={Filtro} />
            <img src={Compartilhar} />
            <img src={Download} />
        </OpcoesContainer>
    </Container>

);




export default ExtratoNavBar;