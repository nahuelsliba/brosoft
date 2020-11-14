import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { initWizardAction } from '../redux/actions/wizard'; 
import { msg_initial_view_welcome_text1, msg_initial_view_welcome_text2, msg_general_button_begin } from '../i18n/translation';

function WelcomeView( { _initWizardAction } ) {

  const handleOnClickBegin = () => {
    console.log('handleOnClickBegin');
    _initWizardAction();
  }

  return (  
    <div className="WelcomeView"> 
      <div className="topM25 cont100w"> {msg_initial_view_welcome_text1} </div>
      <div className="cont100w"> {msg_initial_view_welcome_text2} </div>
      <div className="topM50 cont100w tAlignC"> <Button variant="rgln-primary" onClick={ handleOnClickBegin } >{msg_general_button_begin}</Button> </div>
    </div>   
  );
}

const mapStateToProps = (state) => {  
  return { currentStep : state.wizard.currentStep };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initWizardAction: () => dispatch(initWizardAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);