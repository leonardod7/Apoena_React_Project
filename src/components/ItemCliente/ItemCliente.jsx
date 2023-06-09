import { Container, Nome, Email, DataCriacao } from "./Style";

const ItemCliente = ( props ) => (
    <>
        <Container>
            <Nome>{props.nome}</Nome>
            <Email>{props.email}</Email>
            <DataCriacao>{props.data_criacao}</DataCriacao>
        </Container>
    </>
);

export default ItemCliente;