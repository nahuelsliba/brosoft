import React from 'react';
import { connect } from 'react-redux';
import { updateDisplayStep3Action } from '../redux/actions/wizardStep3';
import UpDownDisplay from './UpDownDisplay';
import { 
  msg_wizard_step3_text1, msg_wizard_step3_reliability_label
} from '../i18n/translation';

function WizardContentStep3( { _display, _updateDisplayStep3Action } ) {

  const handleOnChangeTextStep1 = (input) => {
    console.log(input.target.value);
    //_updateTextStep1Action(input.target.value);
  }

  return (
    <div className="WizardContentStep3">
      <p> {msg_wizard_step3_text1} </p>
      <UpDownDisplay label={msg_wizard_step3_reliability_label} id="0" display={_display} handleOnClickFunction={_updateDisplayStep3Action} />
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { _display : state.wizardStep3.step3_display };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _updateDisplayStep3Action: (id, direction) => dispatch(updateDisplayStep3Action(id, direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep3);