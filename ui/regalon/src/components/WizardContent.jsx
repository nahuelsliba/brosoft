import React from 'react';
import { connect } from 'react-redux';
import WizardContentStep1 from './WizardContentStep1';
import WizardContentStep2 from './WizardContentStep2';
import WizardContentStep3 from './WizardContentStep3';
import WizardContentStep4 from './WizardContentStep4';
import WizardContentStepsSummary from './WizardContentStepsSummary';

function WizardContent( {currentStep, isSearchProudctsFetching} ) {
  return (    
    <div className="WizardContent"> 
      {currentStep === 1 && <WizardContentStep1/>}
      {currentStep === 2 && <WizardContentStep2/>}
      {currentStep === 3 && <WizardContentStep3/>}
      {currentStep === 4 && <WizardContentStep4/>}
      {currentStep === 5 && !isSearchProudctsFetching && <WizardContentStepsSummary/> }
      {currentStep === 5 && isSearchProudctsFetching && 'Buscando...'}
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    currentStep : state.wizard.currentStep,
    isSearchProudctsFetching : state.wizard.isSearchProudctsFetching 
  };
}

export default connect(mapStateToProps, null)(WizardContent);