import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { nextStepAction, previousStepAction, resetWizardAction } from '../redux/actions/wizard'; 
import { searchProducts } from '../helpers/fetchers/wizardFetcher';

function WizardControls({ 
    currentStep, showResultItems, 
    _nextStepAction, _previousStepAction, _resetWizardAction, _searchProducts
  }) {

  const handleOnClickNext = () => {
    console.log('handleOnClickNext');
    _nextStepAction();
  }

  const handleOnClickPrevious = () => {
    console.log('handleOnClickPrevious');
    _previousStepAction();
  }

  const handleOnClickSearch = () => {
    console.log('handleOnClickSearch');
    _searchProducts(null);
  }

  const handleOnClickReset = () => {
    console.log('handleOnClickReset');
    _resetWizardAction();
  }
  
  return (    
    <div className="WizardControls clearfix text-center">      
        {currentStep !== 5 && currentStep !== 1 && !showResultItems && 
        <Button variant="secondary" onClick={ handleOnClickPrevious } className="float-left" >Atras</Button> }
        {currentStep !== 5 && !showResultItems &&  
        <Button variant="success" onClick={ handleOnClickNext } className="float-right">Siguiente</Button> }

        {currentStep === 5 && !showResultItems && 
        <Button variant="secondary" onClick={ handleOnClickReset } className="float-left" >Cancelar</Button> }
        {currentStep === 5 && !showResultItems && 
        <Button variant="primary" onClick={ handleOnClickSearch } className="float-right" >Buscar</Button> }

        {showResultItems && <Button variant="primary" onClick={ handleOnClickReset } >Nueva busqueda</Button> }
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    currentStep : state.wizard.currentStep,
    showResultItems : state.wizard.showResultItems
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _nextStepAction: () => dispatch(nextStepAction()),
      _previousStepAction: () => dispatch(previousStepAction()),
      _resetWizardAction: () => dispatch(resetWizardAction()),
      _searchProducts: (filters) => searchProducts(filters, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardControls);