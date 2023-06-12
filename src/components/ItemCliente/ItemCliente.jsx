import { Container, Nome, Email, DataCriacao, Botao } from "./Style";

const ItemCliente = ( props ) => (
    <>
        <Container>
            <Nome>{props.nome}</Nome>
            <Email>{props.email}</Email>
            <DataCriacao>{props.data_criacao}</DataCriacao>
            <Botao>Criar fatura</Botao>
        </Container>
    </>
);

export default ItemCliente;