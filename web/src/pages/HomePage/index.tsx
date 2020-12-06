import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ProdutoMain from '../../components/ProdutoMain';


import { Carousel, Container, Mensagem } from './styles';

const HomePage: React.FC = () => {

  const puxar = () => {
    const mensagem = document.getElementById("mensagem")
    const classname = mensagem?.getAttribute("class")
    mensagem?.setAttribute("class", `${classname} on`);
  }

  window.onload = puxar

  return (
    <Container>
      <Nav/>
        <Mensagem id="mensagem">  
          <h2>Bem Vindo ao Logo</h2>
          <p>O melhor site de <br/> compras e vendas</p>
        </Mensagem>
        <h2 className="recem">Recém adicionados</h2>
        <Carousel>
          <ProdutoMain/>
          <ProdutoMain/>
          <ProdutoMain/>
          <ProdutoMain/>
          
        </Carousel>
        <h1>paosjdsa</h1>
      <Footer/>
    </Container>
  );
};

export default HomePage;
