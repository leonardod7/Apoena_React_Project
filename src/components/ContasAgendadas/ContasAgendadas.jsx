import ItemContasAgendadas from "../ItemContasAgendadas/ItemContasAgendadas";
import { Container, Titulo } from "./Style";
import contas from "../../data/contas.json";


const ContasAgendadas= () => (
    <Container>
    <Titulo>Contas Agendadas</Titulo>
    {contas.map((ele, ind) => {
      console.log("Item:", ele);
      return (
        <ItemContasAgendadas
          key={ind}
          descri={ele.descricao}
          valor={ele.valor}
        />
      );
    })}
  </Container>
);
export default ContasAgendadas;