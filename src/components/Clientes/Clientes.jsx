import ItemCliente from "../ItemCliente/ItemCliente";
import { Container, Cabecalho } from "./Style";
import clientes from "../../data/clientes.json";


const Clientes = ( props ) => {
    const {toggleCriarFatura} = props;

    return (
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
                                cpf={ele.cpf}
                                endereco={ele.endereco}
                                toggleCriarFatura={props.toggleCriarFatura}                     
                            />
                        )
                        
                    )
                }
            </Container>
        </>
    );
};

export default Clientes;