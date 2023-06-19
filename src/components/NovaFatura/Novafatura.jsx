import {Container,Container2,AdicionarItem,Salvar,MetodoPagamento,Dropdown} from "./Style.js";

const NovaFatura = ( props ) => (
    <Container>
      <h3 style={{paddingLeft:"25px",marginBottom:"0.5%"}}>Nova Fatura</h3>
        <h5 style={{paddingLeft:"5%",marginTop:"4px",marginBottom:"4px"}}>Enviar Para</h5>
        <h7 style={{paddingLeft:"5%",marginTop:"4px",marginBottom:"4px"}}>Nome</h7>
        <h5 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>Pessoa Fisica/Juridica</h5>
        <h7 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>Cpf</h7>
        <h5 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>Endereço</h5>
        <h7 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>xxxxx-xxx</h7>
        <Container2></Container2>
        <AdicionarItem >Adicionar Item</AdicionarItem>
        <Salvar>Salvar</Salvar>
        <MetodoPagamento><Dropdown></Dropdown></MetodoPagamento>
        
    </Container>
);
       
export default NovaFatura;