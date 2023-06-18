import ItemCliente from "../ItemCliente/ItemCliente";
import { Container, Cabecalho } from "./Style";
import clientes from "../../data/clientes.json";


const Clientes = () => (
    <>
        <Cabecalho>
            Clientes Existentes
        </Cabecalho>

        <Container>
            {
                clientes.map(
                    (ele, ind) => (
                        <ItemCliente
                            key={ind}
                            nome={ele.nome_cliente}
                            email={ele.email}
                            data_criacao={ele.data_criacao}                           
                        />
                    )
                    
                )
            }
        </Container>
    </>
);

export default Clientes;