import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout/Layout';

import './App.css';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

      <div className="App">
        <Layout/>
      </div>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
