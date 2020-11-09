import React from 'react';
import { connect } from 'react-redux';
import { updateDisplayStep3Action } from '../redux/actions/wizardStep3';
import UpDownDisplay from './UpDownDisplay';

function WizardContentStep3( { _display, _updateDisplayStep3Action } ) {

  const handleOnChangeTextStep1 = (input) => {
    console.log(input.target.value);
    //_updateTextStep1Action(input.target.value);
  }

  return (
    <div className="WizardContentStep3">
      <p> Del 1 (baja) al 5 (alta), cual es tu nivel de confianza con la persona? </p>
      <UpDownDisplay label="Confianza" id="0" display={_display} handleOnClickFunction={_updateDisplayStep3Action} />
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