import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import AppContainer from './components/AppContainer.jsx';

function App() {
  return (
    <Provider store={store}>      
      <AppContainer> </AppContainer>
    </Provider>
  );
}

export default App;
