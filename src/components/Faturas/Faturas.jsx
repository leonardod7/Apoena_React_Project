import ItemFatura from "../ItemFatura/ItemFatura";
import Container from "./Style";
import { Cabecalho, Valor, Status, Codigo, DataVencimento, DataCriacao, Tipo, Nome } from "../ItemFatura/Style";
import faturas from "../../data/faturas.json";


const Faturas = () => (
    <>
        <Cabecalho>
            <Valor>Valor</Valor>
            <Status>Status</Status>
            <Codigo>Código</Codigo>
            <DataVencimento>Data de Vencimento</DataVencimento>
            <DataCriacao>Data de Criação</DataCriacao>
            <Tipo>Tipo</Tipo>
            <Nome>Nome</Nome>
        </Cabecalho>

        <Container>
            {
                faturas.map(
                    (ele, ind) => (
                        <ItemFatura
                            key={ind}
                            valor={ele.valor}
                            status={ele.status}
                            cod={ele.codigo}
                            data_venc={ele.data_vencimento}
                            data_criacao={ele.data_criacao}
                            tipo={ele.tipo}
                            nome={ele.nome_cliente}
                        />
                    )
                )
            }
        </Container>
    </>
);

export default Faturas;