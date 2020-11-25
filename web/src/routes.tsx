import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import Produtos from './pages/Produtos';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Produtos" exact component={Produtos}/>

      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes;