import {Container,Container2,Container3,Container4,Container5,Enviar} from "./Style.js";

const NovoCliente = ( props ) => (
    <Container>
        <h3>Nome</h3>
        <Container2></Container2>
        <h3>E-mail</h3>
        <Container3></Container3>
        <h3>Cpf/Cnpj</h3>
        <Container4></Container4>
        <h3>Data De Criação</h3>
        <Container5></Container5>
        <Enviar>Enviar</Enviar>
    </Container>
);
       
export default NovoCliente;