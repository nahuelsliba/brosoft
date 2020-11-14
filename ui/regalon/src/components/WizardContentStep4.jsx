import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateAmountAction } from '../redux/actions/wizardStep4';
import { validOnlyNumbers } from '../helpers/validationHelper';
import { 
  msg_wizard_step4_text1, msg_wizard_step4_amount_from_label, msg_wizard_step4_amount_to_label
} from '../i18n/translation';

function WizardContentStep4( { amountFrom, amountFromClass, amountTo, amountToClass, _updateAmountAction } ) {

  const handleOnChangeAmountFrom = (input) => {
    if (validOnlyNumbers(input)) {
      _updateAmountAction(input.target.value, amountTo);
    }
  }

  const handleOnChangeAmountTo = (input) => {
    if (validOnlyNumbers(input)) {
      _updateAmountAction(amountFrom, input.target.value);
    }
  }

  return (
    <div className="WizardContentStep4">
      <Form>          
        <Form.Label>{msg_wizard_step4_text1}</Form.Label>   
        <Form.Group className="fGTextInputS">                            
          <Form.Label>{msg_wizard_step4_amount_from_label}</Form.Label>     
          <Form.Control type="text" placeholder={amountFrom} value={amountFrom} className={amountFromClass}
            onChange={handleOnChangeAmountFrom} maxLength="4" />
          <Form.Label>{msg_wizard_step4_amount_to_label}</Form.Label>     
          <Form.Control type="text" placeholder={amountTo} value={amountTo} className={amountToClass}
          onChange={handleOnChangeAmountTo} maxLength="4" />
        </Form.Group>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    amountFrom : state.wizardStep4.step4_amountFrom, 
    amountFromClass : state.wizardStep4.step4_amountFromClass, 
    amountTo : state.wizardStep4.step4_amountTo,
    amountToClass : state.wizardStep4.step4_amountToClass
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateAmountAction: (amountFrom, amountTo) => dispatch(updateAmountAction(amountFrom, amountTo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep4);
