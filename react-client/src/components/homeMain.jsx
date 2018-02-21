import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

// The Main component renders one of the Routes (provided that one matches). 
const homeMain = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </main>
)

export default homeMain;