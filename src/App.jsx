import React from 'react';
import { Provider } from 'react-redux';
import store from './Store'; 
import LandingPage from './store/LandingPage';
import store from './Store';
// import { Provider } from 'react-redux';
function App() {
  

  return (
    <Provider  store={store}>
      <div className='App'>
        < LandingPage />
      </div>
    </Provider>
    
  )
}

export default App
