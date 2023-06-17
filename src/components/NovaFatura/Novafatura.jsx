import {Container,Container2,AdicionarItem,Salvar,MetodoPagamento} from "./Style.js";

const NovaFatura = ( props ) => (
    <Container>
      <h3>Nova Fatura</h3>
        <h5>Ivo Lavacek</h5>
        <h7>ivolavacek@gmail.com</h7>
        <Container2></Container2>
        <AdicionarItem >Adicionar Item</AdicionarItem>
        <Salvar></Salvar>
        <MetodoPagamento></MetodoPagamento>
        
    </Container>
);
       
export default NovaFatura;