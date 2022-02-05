import React from 'react';

import { Provider } from 'react-redux';
import Application from './Application';
import store from './store';




const App = () => {
  return <>
    <Provider store={store}>
      <Application/>
    </Provider>
  </>
};

export default App;
