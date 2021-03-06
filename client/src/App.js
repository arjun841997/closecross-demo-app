import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Listing from './components/Listing';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Listing />
        </div>
      </Provider>
    );
  }
}

export default App;
