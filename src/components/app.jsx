import React, { useState, useEffect } from 'react';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../js/routes';

const MyApp = () => {

  // Framework7 Parameters
  const f7params = {
    name: 'Maple', // App name
      theme: 'auto', // Automatic theme detection

      // App routes
      routes: routes,
      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV ==='production' ? {
        path: '/service-worker.js',
      } : {},
  };

  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params } >
          <View id="logon" url="/logon/" />
    </App>
  );
  
}
export default MyApp;