import {Container,Container2,AdicionarItem,Salvar,MetodoPagamento} from "./Style.js";

const NovaFatura = ( props ) => (
    <Container>
      <h3 style={{paddingLeft:"25px"}}>Nova Fatura</h3>
        <h5 style={{paddingLeft:"50px"}}>Enviar Para</h5>
        <h7 style={{paddingLeft:"50px"}}>Nome</h7>
        <h5 style={{paddingLeft:"50px"}}>Pessoa Fisica/Juridica</h5>
        <h7 style={{paddingLeft:"50px"}}>Cpf</h7>
        <h5 style={{paddingLeft:"50px"}}>Endereço</h5>
        <h7 style={{paddingLeft:"50px"}}>xxxxx-xxx</h7>
        <Container2></Container2>
        <AdicionarItem >Adicionar Item</AdicionarItem>
        <Salvar>Salvar</Salvar>
        <MetodoPagamento></MetodoPagamento>
        
    </Container>
);
       
export default NovaFatura;