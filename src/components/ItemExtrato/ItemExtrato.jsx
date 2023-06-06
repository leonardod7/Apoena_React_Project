import { Categoria, Container, Data, Descricao, Instituicao, Valor } from "./Style";

const ItemExtrato = ( props ) => (
    <Container>
        <Data>{props.data}</Data>
        <Categoria>{props.cat}</Categoria>
        <Descricao>{props.descri}</Descricao>
        <Valor>R${props.valor}</Valor>
    </Container>
);

export default ItemExtrato;