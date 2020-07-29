import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import mapNoteLogo from 'assets/images/map-notes-logo.png'

function AppHeader () {
  return (
    <React.Fragment>
      <h1 class='ui header'>
        <img src={mapNoteLogo} class='ui circular image' />
        Map Notes
      </h1>
    </React.Fragment>
  );
}

export default AppHeader;
