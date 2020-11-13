import React from 'react';
import WizardProgressBar from './WizardProgressBar';
import WizardContentResultFilters from './WizardContentResultFilters';
import WizardContent from './WizardContent';
import WizardContentResult from './WizardContentResult';
import WizardControls from './WizardControls';
import { connect } from 'react-redux';

function Wizard({ showResultItems }) {
  
  return (    
    <div className="Wizard">
      {!showResultItems && <WizardProgressBar /> }     

      {!showResultItems && <WizardContent /> }
      {showResultItems && <WizardContentResult /> }
      
      <div className="WizardControlsContainer">     
        <WizardControls/>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    showResultItems : state.wizard.showResultItems
  };
}

export default connect(mapStateToProps, null)(Wizard);