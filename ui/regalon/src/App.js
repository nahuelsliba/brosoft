import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import AppContainer from './components/AppContainer.jsx';
import AppFooter from './components/AppFooter.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';

function App() {
  return (
    <Provider store={store}>      
      <AppContainer/>
      <AppFooter/>
      <TermsAndConditions/>      
    </Provider>
  );
}

export default App;
