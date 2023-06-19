import { Container, NomeTitulo, Div, DivValor, Valor, Status, Datas, DataVencimento, DataCriacao, Tipo, Nome } from "./Style";

const ItemFatura = ( props ) => {
    let corStatus;
    let corLetras;
    if (props.status == 'Pendente') {
        corStatus = '#e5e819';
        corLetras = 'black'
    } else if (props.status == 'Em análise') {
        corStatus = 'grey';
        corLetras = 'white';
    } else {
        corStatus = 'green';
    }

    return (
        <Container>
            <NomeTitulo>
                {props.nome}
            </NomeTitulo>
            <Div>
                <DivValor>
                    <Valor>R$ {props.valor},00</Valor>
                    <Status style={{ backgroundColor: corStatus, color: corLetras}}>{props.status}</Status>
                </DivValor>

                <Datas>
                    <DataVencimento>Vencimento: {props.data_venc}</DataVencimento>
                    <DataCriacao>Expedição: {props.data_criacao}</DataCriacao>
                </Datas>

                <Tipo>{props.tipo}</Tipo>
                <Nome>Cliente: {props.nome}</Nome>
            </Div>
        </Container>
    )
};

export default ItemFatura;