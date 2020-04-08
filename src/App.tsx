import './App.css';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './componentes/home/Header';
import Home from './componentes/home/Home';
import { ProfileList } from './componentes/perfiles/ProfileList';
import { ProfileAdd } from './componentes/perfiles/ProfileAdd';


function App() {
  return (
      <React.Fragment>
        <Header/>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={ProfileList}/>
          <Route path="/profile/add" component={ProfileAdd}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;
