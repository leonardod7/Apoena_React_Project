import ItemExtrato from "../ItemExtrato/ItemExtrato";
import Container from "./Style";
import transacoes from "../../data/transacoes.json";
import { Titulo } from "../ContasAgendadas/Style";


const Extrato = () => (
    <Container>
        <Titulo>Contas Agendadas</Titulo>
        {
            transacoes.map(
                (ele, ind) => (
                    <ItemExtrato
                        key={ind}
                        cat={ele.categoria}
                        inst={ele.instituicao}
                        data={ele.data}
                        descri={ele.descricao}
                        valor={ele.valor}
                    />
                )
            )
        }
    </Container>
);

export default Extrato;