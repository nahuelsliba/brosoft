import React from 'react';
import { msg_footer_text1 } from '../i18n/translation';
import { connect } from 'react-redux';
import { showTermsAndConditionsAction } from '../redux/actions/general';

function AppFooter( { _showTermsAndConditionsAction } ) {

  const showTermsAndConditions = () => {
    _showTermsAndConditionsAction();
  }

  return (    
    <div className="AppFooter"> 
      <div className="AppFooterText"> {msg_footer_text1} <a href="#" onClick={showTermsAndConditions}>Terminos y Condiciones</a> </div>
    </div>
  );
}

/*
const mapStateToProps = (state) => {  
  return { show : state.general.termsAndConditionsShowing };
}
*/

const mapDispatchToProps = (dispatch) => {
  return {
    _showTermsAndConditionsAction: () => dispatch(showTermsAndConditionsAction())
  }
}

export default connect(null, mapDispatchToProps)(AppFooter);