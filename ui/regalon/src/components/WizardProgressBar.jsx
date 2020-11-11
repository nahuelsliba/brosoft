import React from 'react';
import { connect } from 'react-redux';

function WizardProgressBar( {currentStep} ) {
  return (    
    <div class="WizardProgressBarCont cont100w">
      <div className="WizardProgressBar"> 
        <span className={currentStep === 1 ? 'bold underline' : ''} >&nbsp;1&nbsp;</span>
        &nbsp;-&nbsp;
        <span className={currentStep === 2 ? 'bold underline' : ''} >&nbsp;2&nbsp;</span>
        &nbsp;-&nbsp;
        <span className={currentStep === 3 ? 'bold underline' : ''} >&nbsp;3&nbsp;</span>
        &nbsp;-&nbsp;
        <span className={currentStep === 4 ? 'bold underline' : ''} >&nbsp;4&nbsp;</span>
        &nbsp;-&nbsp;
        <span className={currentStep === 5 ? 'bold underline' : ''} >&nbsp;5&nbsp;</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

export default connect(mapStateToProps, null)(WizardProgressBar);