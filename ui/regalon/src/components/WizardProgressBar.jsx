import React from 'react';
import { connect } from 'react-redux';

function WizardProgressBar( {currentStep} ) {
  return (    
    <div className="WizardProgressBar"> 
      <span className={currentStep == 1 ? 'bold' : ''} > 1 </span>
      - 
      <span className={currentStep == 2 ? 'bold' : ''} > 2 </span>
      - 
      <span className={currentStep == 3 ? 'bold' : ''} > 3 </span>
      - 
      <span className={currentStep == 4 ? 'bold' : ''} > 4 </span>
      - 
      <span className={currentStep == 5 ? 'bold' : ''} > 5 </span>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

export default connect(mapStateToProps, null)(WizardProgressBar);