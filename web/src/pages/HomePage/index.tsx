import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import { Container, Mensagem } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Nav/>
        <Mensagem>
          <aside className="mensagem">
            <h2>Bem Vindo ao Logo</h2>
            <p>O melhor site de <br/> compras e vendas</p>
          </aside> 
          <div className="triangulo"></div>
        </Mensagem>
      <Footer/>
    </Container>
  );
};

export default HomePage;
