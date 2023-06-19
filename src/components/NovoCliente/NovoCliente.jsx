import {Container,Enviar,Sair,Titulo,Formulario,Field,input_data} from "./Style.js";
import ImagemX from "../../imagens/sair.png" ;
/*
const NovoCliente = ( props ) => (
    <Container>
        <Titulo><h1>Novo Cliente</h1></Titulo>
        <Sair><img src={ImagemX} alt="ImagemX" style={{paddingLeft:"7px",paddingTop:"5px"}}/></Sair>
        <h3 style={{paddingTop:"50px",paddingLeft:"50px"}}>Nome</h3>
        <Container></Container>
        <h3 style={{paddingTop:"50px",paddingLeft:"50px"}}>E-mail</h3>
        <Container></Container>
        <h3 style={{paddingTop:"60px",paddingLeft:"50px"}}>Cpf/Cnpj</h3>
        <Container></Container>
        <Field><h3 style={{paddingTop:"60px",paddingLeft:"50px"}}>Data De Criação</h3>
        <Container></Container>
        </Field>
        <Enviar>Enviar</Enviar>
    </Container>
);
 */
const NovoCliente = ( props ) => (
    <Container>
        <Titulo><h1>Novo Cliente</h1></Titulo>
        <Sair><img src={ImagemX} alt="ImagemX" style={{paddingLeft:"7px",paddingTop:"5px"}}/></Sair>
        <Formulario>
        <Field>
            <h3>Nome</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>E-mail</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>CPF/Cnpj</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>Data De Criação</h3>
        <input style={input_data}></input>
        </Field>
        </Formulario>
        <Enviar><p style={{marginTop:"10px",fontWeight:"bolder",fontSize:"30px"}}>Enviar</p></Enviar>
    </Container>
);
export default NovoCliente;