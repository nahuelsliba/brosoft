import React from 'react';
import { connect } from 'react-redux';
import { updateDisplayStep2Action } from '../redux/actions/wizardStep2';
import UpDownDisplay from './UpDownDisplay';

function WizardContentStep2( { availablePoints, displays, _updateDisplayStep2Action } ) {

  return (
    <div className="WizardContentStep2">
      <p> Cómo es la persona? {availablePoints} </p>
      <UpDownDisplay label="Creativa" id="0" display={displays['0']} handleOnClickFunction={_updateDisplayStep2Action} />
      <UpDownDisplay label="Deportista" id="1" display={displays['1']} handleOnClickFunction={_updateDisplayStep2Action} />
      <UpDownDisplay label="Intelectual" id="2" display={displays['2']} handleOnClickFunction={_updateDisplayStep2Action} />
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    availablePoints : state.wizardStep2.availablePoints,
    displays : state.wizardStep2.displays
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateDisplayStep2Action: (id, direction) => dispatch(updateDisplayStep2Action(id, direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep2);