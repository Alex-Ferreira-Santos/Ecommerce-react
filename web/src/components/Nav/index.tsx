import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Inputs } from './styles';

import lupa from "../../img/magnifying-glass.svg"
import carrinho from "../../img/shopping-cart.svg"




const Nav: React.FC = () => {

  let open = true;
  const btn = document.querySelector(".menu")
  btn?.addEventListener("click",() => {
    if (open) {
      btn.setAttribute("Class","menu open");
      open = false
    }else{
      btn.removeAttribute("class");
      btn.setAttribute("class","menu");
      open = true
    }
    
  })

  return (
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
          <p className="ola">Olá usuario</p>
        </nav>
      </Container>
  );
};

export default Nav;
