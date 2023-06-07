import { Container, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome } from "./Style";

const ItemFatura = ( props ) => (
    <>
        <Container>
            <Valor>{props.valor}</Valor>
            <Status>{props.status}</Status>
            <Codigo>{props.cod}</Codigo>
            <DataVencimento>{props.data_venc}</DataVencimento>
            <DataCriacao>{props.data_criacao}</DataCriacao>
            <Tipo>{props.tipo}</Tipo>
            <Nome>{props.nome}</Nome>
        </Container>
    </>
);

export default ItemFatura;
