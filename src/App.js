
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/Rocketstore.jsx';
import APIDatacomponent from './api/apidata.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <APIDatacomponent />
    </Provider>,
  document.getElementById('root')
);



export default App;
