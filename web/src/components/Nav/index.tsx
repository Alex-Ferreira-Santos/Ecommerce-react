import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Inputs, Pages } from './styles';

import lupa from "../../img/magnifying-glass.svg"
import carrinho from "../../img/shopping-cart.svg"




const Nav: React.FC = () => {

  let open = true;
  const btn = document.querySelector(".menu")
  const menu = document.getElementById("hide");
  const className = menu?.getAttribute("class")
  btn?.addEventListener("click",() => {
    if (open) {
      btn.setAttribute("Class","menu open");
      menu?.setAttribute("class",`${className} active`);
      open = false
    }else{
      btn.removeAttribute("class");
      btn.setAttribute("class","menu");
      menu?.setAttribute("class",`${className}`);
      open = true
    }
    
  })

  return (
    <div>
      <Container>
        <nav>
          <h1>LOGO</h1>
          <Inputs>
              <input type="search" name="pesquisa" id="pesquisa" placeholder="pesquisa..."/>
              <button type="submit" className="search"><img src={lupa} className="lupa" alt="lupa"/></button>
          </Inputs>
          <Link to="" className="link"><img src={carrinho} className="carrinho" alt="carrinho"/></Link>
          <button className="menu">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </button>
          <div className="salvos">
            <Link to="">Favoritos</Link>
            <Link to="">Carrinho</Link>
            <Link to="">Login</Link>
          </div>
          <p className="ola">Olá usuario!</p>
        </nav>
      </Container>
      <Pages id="hide">
            <Link to="/" className="pages">Home</Link>
            <Link to="" className="pages">Produtos</Link>
            <Link to="" className="pages">Vender</Link>
            <Link to="" className="pages">Contato</Link>
            <Link to="" className="pages">Ofertas</Link>
            <Link to="" className="pages fav">Favoritos</Link>
            <Link to="" className="pages fav">Login</Link>
      </Pages>
    </div>
  );
};

export default Nav;
