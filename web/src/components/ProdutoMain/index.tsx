import React from 'react';

import { Container } from './styles';

const ProdutoMain: React.FC = () => {
  return (
    <Container>
      <img src="" alt="favorite"/>
      <img src="https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png" alt="produto" id="img"/>
      <div className="info">
        <p>Produto</p>
        <p className="preco">R$99,99</p>
        <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas corrupti</p>
      </div>
    </Container>
  );
};

export default ProdutoMain;
