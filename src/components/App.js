import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MapControl from './MapControl';
import Signin from './Signin';
import firebase from '../firebase';
import 'firebase/auth';


function App() {
  return (
   <Router>
     <AppHeader />
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
