import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Novidades } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <Novidades>
          <h2>Receba novidades</h2>
          <form action="">
            <div className="inputs">
              <input type="text" placeholder="Nome" name="nome" id="nome"/>
              <input type="email" placeholder="Email" name="email" id="email"/>
            </div>
            <input type="submit" id="submit" value="Confirmar"/>
          </form>
        </Novidades>
        <h1>LOGO</h1>
        <nav>
          <Link to="" className="nav">ajuda</Link>
          <Link to="" className="nav">redes sociais</Link>
          <Link to="" className="nav">sobre</Link>
          <Link to="" className="nav">minha conta</Link>
          <Link to="" className="nav">copyright</Link>
        </nav>
      </footer>
    </Container>
  );
};

export default Footer;
