import ItemCliente from "../ItemCliente/ItemCliente";
import Container from "./Style";
import { Cabecalho, Nome, Email, DataCriacao } from "../ItemCliente/Style";
import clientes from "../../data/clientes.json";


const Clientes = () => (
    <>
        <Cabecalho>
            <Nome>Nome</Nome>
            <Email>Email</Email>
            <DataCriacao>Data de Criação</DataCriacao>
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
                        >
                        </ItemCliente>
                    )
                    
                )
            }
        </Container>
    </>
);

export default Clientes;