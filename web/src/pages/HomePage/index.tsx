import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ProdutoMain from '../../components/ProdutoMain';


import { Carousel, Container, Mensagem } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Nav/>
        <Mensagem>  
          <h2>Bem Vindo ao Logo</h2>
          <p>O melhor site de <br/> compras e vendas</p>
        </Mensagem>
        <h2>Recém adicionados</h2>
        <Carousel>
          <ProdutoMain/>
          <ProdutoMain/>
          <ProdutoMain/>
          <ProdutoMain/>
        </Carousel>
      <Footer/>
    </Container>
  );
};

export default HomePage;
