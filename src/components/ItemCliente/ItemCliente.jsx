import { Container, Pessoa, Nome, Email, DataCriacao, Botao } from "./Style";

const ItemCliente = ( props ) => {
    const handleButtonClick = () => {
        props.toggleCriarFatura( props.nome, props.email, props.cpf, props.endereco );
    };

    return (
        <>
            <Container>
                <Nome>{props.nome}</Nome>
                <Email>{props.email}</Email>
                <Botao onClick={handleButtonClick}>Criar fatura</Botao>
            </Container>
        </>
    );
};

export default ItemCliente;