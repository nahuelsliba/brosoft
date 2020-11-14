import React from 'react';
import { connect } from 'react-redux';
import { showTermsAndConditionsAction } from '../redux/actions/general';
import { msg_footer_text1, msg_general_label_terms_conditions } from '../i18n/translation';

function AppFooter( { _showTermsAndConditionsAction } ) {

  const showTermsAndConditions = () => {
    _showTermsAndConditionsAction();
  }

  return (    
    <div className="AppFooter"> 
      <div className="AppFooterText"> {msg_footer_text1} <a href="#" onClick={showTermsAndConditions}>{msg_general_label_terms_conditions}</a> </div>
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