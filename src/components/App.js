import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MapControl from './MapControl';
import Signin from './Signin';
import firebase from '../firebase';
import 'firebase/auth';


function App() {
  return (
   <Router>
     <Header />
     <Switch>
       <Route path='/signin'>
         <Signin />
       </Route>
       <Route path='/'>
         <MapControl />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
