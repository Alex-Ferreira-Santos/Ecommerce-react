import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Nav/>
      <Footer/>
    </Container>
  );
};

export default HomePage;
