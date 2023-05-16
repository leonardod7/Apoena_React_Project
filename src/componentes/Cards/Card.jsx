import {Container, Categoria, Instituicao, Descricao, Data, Valor} from './Style.js';

const Extrato = () => {
    return (
        <div>
          {/* Outros elementos da página Teste */}
          <Container>
            <Categoria>C</Categoria>
            <Instituicao>I</Instituicao>
            <Data>03/05/2023</Data>
            <Descricao>Descrição da Compra</Descricao>
            <Valor>R$150,40</Valor>
          </Container>
        </div>
      );
};

export default Extrato;

