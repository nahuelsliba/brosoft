import React from 'react';
import { connect } from 'react-redux';
import { updateDisplayStep2Action } from '../redux/actions/wizardStep2';
import UpDownDisplay from './UpDownDisplay';
import { 
  msg_wizard_step2_text1, msg_wizard_step2_creativity_label,
  msg_wizard_step2_sporty_label, msg_wizard_step2_intellectual_label, 
  msg_wizard_step2_available_points_label
} from '../i18n/translation';

function WizardContentStep2( { availablePoints, displays, _updateDisplayStep2Action } ) {

  return (
    <div className="WizardContentStep2">
      <p> {msg_wizard_step2_text1} </p>
      <UpDownDisplay label={msg_wizard_step2_creativity_label} id="0" display={displays['0']} handleOnClickFunction={_updateDisplayStep2Action} />
      <UpDownDisplay label={msg_wizard_step2_sporty_label} id="1" display={displays['1']} handleOnClickFunction={_updateDisplayStep2Action} />
      <UpDownDisplay label={msg_wizard_step2_intellectual_label} id="2" display={displays['2']} handleOnClickFunction={_updateDisplayStep2Action} />
      <p className="topM25">{msg_wizard_step2_available_points_label} <b>{availablePoints}</b></p>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    availablePoints : state.wizardStep2.step2_availablePoints,
    displays : state.wizardStep2.step2_displays
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateDisplayStep2Action: (id, direction) => dispatch(updateDisplayStep2Action(id, direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep2);