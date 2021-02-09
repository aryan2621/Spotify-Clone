import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from './reducer'
import {DataLayer} from './StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>
   
   ,
  document.getElementById('root')
);




//702699e65ef94d6ebeae62ef532d9340