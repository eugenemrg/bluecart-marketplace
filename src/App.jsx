import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import LandingPage from './store/LandingPage';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
