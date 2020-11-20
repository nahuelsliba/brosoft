import React from 'react';
import Wizard from './Wizard';
import MaintenanceView from './MaintenanceView';
import WelcomeView from './WelcomeView';
import AppHeader from './AppHeader.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function AppContainer( {maintenance, currentStep} ) {
  return (        
    <Container className="AppContainer">
      <AppHeader/>
      <div className="AppContainerRowCenter">      
        <div className="AppContainerCenter">
          { maintenance && <MaintenanceView/> }

          { !maintenance && currentStep !== 0 && <Wizard> Wizard </Wizard> }
          { !maintenance && currentStep === 0 && <WelcomeView/> }
        </div>        
      </div>      
    </Container>
  );
}

const mapStateToProps = (state) => {  
  return { 
    maintenance : state.general.maintenance,
    currentStep : state.wizard.currentStep
   };
}

export default connect(mapStateToProps, null)(AppContainer);