import {Container, Descricao, Valor} from "./Style";


const ItemContasAgendadas = ( props) => (
    <Container>
        <Descricao>{props.descri}</Descricao>
        <Valor>{props.valor}</Valor>
    </Container>

)


export default ItemContasAgendadas;
