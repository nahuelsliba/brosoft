import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

const handleOnChangeFilter = () => {

}

function WizardContentResultFilters( {currentStep} ) {
  return (    
    <div className="WizardContentResultFilters"> 
      <Form>        
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Ordenar por: </Form.Label>
          <Form.Control as="select" onChange={handleOnChangeFilter}>
            <option value="1" selected>Precio (descendente)</option>
            <option value="2">Precio (ascendente)</option>
            <option value="3">Valoracion</option>
          </Form.Control>
        </Form.Group>            
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

export default connect(mapStateToProps, null)(WizardContentResultFilters);