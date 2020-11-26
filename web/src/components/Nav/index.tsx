import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Inputs } from './styles';

import lupa from "../../img/magnifying-glass.svg"
import carrinho from "../../img/shopping-cart.svg"
import burguer from "../../img/cardapio.svg"



const Nav: React.FC = () => {
  return (
    <Container>
      <nav>
        <h1>LOGO</h1>
        <Inputs>
          <input type="search" name="pesquisa" id="pesquisa" placeholder="pesquisa..."/>
          <button type="submit"><img src={lupa} alt="lupa"/></button>
        </Inputs>
        <Link to=""><img src={carrinho} alt="carrinho"/></Link>
        <button><img src={burguer} alt=""/></button>
        <p>olá usuario</p>
      </nav>
    </Container>
  );
};

export default Nav;
