import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { nextStepAction, previousStepAction, resetWizardAction, initialViewAction } from '../redux/actions/wizard'; 
import { step1ValidationErrorsAction, step1ClearValidationErrorsAction } from '../redux/actions/wizardStep1'; 
import { step4ValidationErrorsAction, step4ClearValidationErrorsAction } from '../redux/actions/wizardStep4'; 
import { searchProducts } from '../helpers/fetchers/wizardFetcher';

function WizardControls({ 
    currentStep, showResultItems, 
    _nextStepAction, _previousStepAction, _resetWizardAction, _searchProducts, _initialViewAction,
    _step1ValidationErrorsAction, _step1ClearValidationErrorsAction, _step4ValidationErrorsAction, _step4ClearValidationErrorsAction,
    step1State, step2State, step3State, step4State
  }) {

  const handleOnClickNext = () => {
    if (currentStep === 1) {
      handleOnClickNextStep1();
    } else if (currentStep === 4) {
      handleOnClickNextStep4();
    } else {
      _nextStepAction();
    }
  }

  const handleOnClickNextStep1 = () => {
    if (step1State.step1_validationFunction(step1State) === true) {
      _step1ClearValidationErrorsAction();
      _nextStepAction();
    } else {
      _step1ValidationErrorsAction();
    }
  }

  const handleOnClickNextStep4 = () => {
    if (step4State.step4_validationFunction(step4State) === true) {
      _step4ClearValidationErrorsAction();
      _nextStepAction();
    } else {
      _step4ValidationErrorsAction();
    }
  }

  const handleOnClickPrevious = () => {
    console.log('handleOnClickPrevious');
    _previousStepAction();
  }

  const handleOnClickInitialView = () => {
    console.log('handleOnClickInitialView');
    _initialViewAction();
  }

  const handleOnClickSearch = () => {
    const filters = {
      gender : step1State.step1_gender,
      age : step1State.step1_age,
      ageInterval : step1State.step1_ageInterval,
      ageIntervalFrom : step1State.step1_ageIntervalFrom,
      ageIntervalTo : step1State.step1_ageIntervalTo,
      
      creativity : step2State.step2_displays[0].value,
      sporty : step2State.step2_displays[1].value,
      intellectual : step2State.step2_displays[2].value,

      reliability : step3State.step3_display.value,

      amountFrom : step4State.step4_amountFrom,
      amountTo : step4State.step4_amountTo
    };
    _searchProducts(filters);
  }

  const handleOnClickReset = () => {
    console.log('handleOnClickReset');
    _resetWizardAction();
  }
  
  return (    
    <div className="WizardControls clearfix text-center">      
        {currentStep === 1 && !showResultItems && 
        <Button variant="rgln-secondary" onClick={ handleOnClickInitialView } className="float-left" >Cancelar</Button> }

        {currentStep !== 5 && currentStep !== 1 && !showResultItems && 
        <Button variant="rgln-secondary" onClick={ handleOnClickPrevious } className="float-left" >Atras</Button> }
        {currentStep !== 5 && !showResultItems &&  
        <Button variant="rgln-primary" onClick={ handleOnClickNext } className="float-right">Siguiente</Button> }

        {currentStep === 5 && !showResultItems && 
        <Button variant="rgln-secondary" onClick={ handleOnClickReset } className="float-left" >Cancelar</Button> }
        {currentStep === 5 && !showResultItems && 
        <Button variant="rgln-primary" onClick={ handleOnClickSearch } className="float-right" >Buscar </Button> }        
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    currentStep : state.wizard.currentStep,
    showResultItems : state.wizard.showResultItems,

    step1State : state.wizardStep1,
    step2State : state.wizardStep2,
    step3State : state.wizardStep3,
    step4State : state.wizardStep4
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _initialViewAction: () => dispatch(initialViewAction()),
      _nextStepAction: () => dispatch(nextStepAction()),
      _previousStepAction: () => dispatch(previousStepAction()),
      _resetWizardAction: () => dispatch(resetWizardAction()),
      _searchProducts: (filters) => searchProducts(filters, dispatch),

      _step1ValidationErrorsAction: () => dispatch(step1ValidationErrorsAction()),
      _step1ClearValidationErrorsAction: () => dispatch(step1ClearValidationErrorsAction()),
      _step4ValidationErrorsAction: () => dispatch(step4ValidationErrorsAction()),
      _step4ClearValidationErrorsAction: () => dispatch(step4ClearValidationErrorsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardControls);