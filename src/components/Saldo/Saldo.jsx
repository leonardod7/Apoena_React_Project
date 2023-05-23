import React from 'react';
import {Container, SaldoConta, Valor, AtualizarBox, Replay, Vector, Badge, Label} from './Style'
import Seta from '../../imagens/Vector.png';

const Saldo = () => {
  const saldoAtual = "R$10.000,00";
  

  return (
    <Container>
      <SaldoConta>
        Saldo em Conta
      </SaldoConta>
      <Badge>
        <Label>Atualizado a 8 min</Label>
      </Badge>
      <AtualizarBox>
        <Replay>
            <Vector><img src={Seta}/></Vector>
        </Replay>
      </AtualizarBox>
      <Valor>
        {saldoAtual}
      </Valor>
    </Container>
  );
};

export default Saldo;