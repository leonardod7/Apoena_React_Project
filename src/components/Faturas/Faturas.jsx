import ItemFatura from "../ItemFatura/ItemFatura";
import { Container, Cabecalho } from "./Style";
import faturas from "../../data/faturas.json";


const Faturas = () => (
    <>
        <Cabecalho>
            Faturas Existentes
        </Cabecalho>

        <Container>
            {
                faturas.map(
                    (ele, ind) => (
                        <ItemFatura
                            key={ind}
                            valor={ele.valor}
                            status={ele.status}
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