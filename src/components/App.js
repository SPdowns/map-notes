import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MapControl from './MapControl';


function App() {
  return (
   <React.Fragment>
     <Header />
     <MapControl />
   </React.Fragment>
  );
}

export default App;
