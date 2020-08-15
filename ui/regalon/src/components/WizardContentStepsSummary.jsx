import React from 'react';
import { connect } from 'react-redux';

function WizardContentStepsSummary( { availablePoints } ) {

  return (
    <div className="WizardContentStepsSummary">
      <p> El regalo es para una mujer, de entre 31 y 35 anios, creativa, con la que tengo mucha confianza, y quiero gastar entre 20 y 30 euros. </p>
      <p> Haz click en Buscar y te ayudaremos a encontrar el regalo ideal! </p>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { availablePoints : state.wizardStep2.availablePoints };
}

export default connect(mapStateToProps)(WizardContentStepsSummary);