import { Container, Pessoa, Nome, Email, DataCriacao, Botao } from "./Style";

const ItemCliente = ( props ) => (
    <>
        <Container>
            <Nome>{props.nome}</Nome>
            <Email>{props.email}</Email>
            <Botao onClick={toggleCriarFatura}>Criar fatura</Botao>
        </Container>
    </>
);

export default ItemCliente;