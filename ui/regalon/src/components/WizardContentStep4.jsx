import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateAmountAction } from '../redux/actions/wizardStep4';

function WizardContentStep4( { amountFrom, amountTo, _updateAmountAction } ) {

  const handleOnChangeAmountFrom = (input) => {
    _updateAmountAction(input.target.value, amountTo);
  }

  const handleOnChangeAmountTo = (input) => {
    _updateAmountAction(amountFrom, input.target.value);
  }

  return (
    <div className="WizardContentStep4">
      <Form>          
        <Form.Label>Cuanto quiers gastar? </Form.Label>   
        <Form.Group>                            
          <Form.Label>Al menos: </Form.Label>     
          <Form.Control type="text" placeholder={amountFrom} onChange={handleOnChangeAmountFrom}/>
          <Form.Label>y no mas de: </Form.Label>     
          <Form.Control type="text" placeholder={amountTo} onChange={handleOnChangeAmountTo} />
        </Form.Group>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    amountFrom : state.wizardStep4.step4_amountFrom, 
    amountTo : state.wizardStep4.step4_amountTo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateAmountAction: (amountFrom, amountTo) => dispatch(updateAmountAction(amountFrom, amountTo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep4);
