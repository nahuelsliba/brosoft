import React from 'react';
import Wizard from './Wizard';
import AppHeader from './AppHeader.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function AppContainer() {
  return (        
    <Container className="AppContainer">
      <Row> <AppHeader/> </Row>
      <Row className="AppContainerRowCenter">
        <div className="AppContainerCenter">
          <Wizard> Wizard </Wizard> 
        </div>
      </Row>
    </Container>
  );
}

export default AppContainer;