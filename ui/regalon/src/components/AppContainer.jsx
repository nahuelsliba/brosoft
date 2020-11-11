import React from 'react';
import Wizard from './Wizard';
import WelcomeView from './WelcomeView';
import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function AppContainer( {currentStep} ) {
  return (        
    <Container className="AppContainer">
      <Row> <AppHeader/> </Row>
      <Row className="AppContainerRowCenter">      
        <div className="AppContainerCenter">
          { currentStep !== 0 && <Wizard> Wizard </Wizard> }
          { currentStep === 0 && <WelcomeView/> }
        </div>
      </Row>
      <Row> <AppFooter/> </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

export default connect(mapStateToProps, null)(AppContainer);