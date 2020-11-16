import React from 'react';
import { connect } from 'react-redux';
import { 
  msg_wizard_title_step1, msg_wizard_title_step2, msg_wizard_title_step3, 
  msg_wizard_title_step4, msg_wizard_title_step5, 
} from '../i18n/translation';

function WizardProgressBar( {currentStep} ) {
  return (    
    <div>
      <div className="WizardProgressBarCont cont100w">
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
      <div className="WizardProgressBarTitle"> 
        {currentStep === 1 && <span> {msg_wizard_title_step1} </span>}
        {currentStep === 2 && <span> {msg_wizard_title_step2} </span>}
        {currentStep === 3 && <span> {msg_wizard_title_step3} </span>}
        {currentStep === 4 && <span> {msg_wizard_title_step4} </span>}
        {currentStep === 5 && <span> {msg_wizard_title_step5} </span>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

export default connect(mapStateToProps, null)(WizardProgressBar);