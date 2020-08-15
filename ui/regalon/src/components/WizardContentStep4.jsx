import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateTextStep1Action } from '../redux/actions/wizardStep1';

function WizardContentStep4( { textStep1, _updateTextStep1Action } ) {

  const handleOnChangeTextStep1 = (input) => {
    console.log(input.target.value);
    //_updateTextStep1Action(input.target.value);
  }

  return (
    <div className="WizardContentStep4">
      <Form>          
        <Form.Label>Cuanto quiers gastar? </Form.Label>   
        <Form.Group>                            
          <Form.Label>Al menos: </Form.Label>     
          <Form.Control type="text" placeholder="euros" />
          <Form.Label>y no mas de: </Form.Label>     
          <Form.Control type="text" placeholder="euros" />
        </Form.Group>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { textStep1 : state.wizardStep1.textStep1 };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateTextStep1Action: (newValue) => dispatch(updateTextStep1Action(newValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep4);
