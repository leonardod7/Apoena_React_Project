import { Container, Pessoa, Nome, Email, DataCriacao, Botao } from "./Style";

const ItemCliente = ( props ) => (
    <>
        <Container>
            <Pessoa>
                <Nome>{props.nome}</Nome>
                <Email>{props.email}</Email>
            </Pessoa>
            <Botao>Criar fatura</Botao>
        </Container>
    </>
);

export default ItemCliente;