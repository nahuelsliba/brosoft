import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideTermsAndConditionsAction } from '../redux/actions/general';
import { 
  msg_general_button_close, msg_terms_conditions_title, msg_terms_conditions_body_text1 
} from '../i18n/translation';

function TermsAndConditions( {show, _hideTermsAndConditionsAction} ) {

  const hideTermsAndConditions = () => {
    _hideTermsAndConditionsAction();
  } 

  return (    
    <Modal show={show} onHide={hideTermsAndConditions}>
      <Modal.Header closeButton >
        <Modal.Title>{msg_terms_conditions_title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{msg_terms_conditions_body_text1}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="rgln-secondary" className="elAutoM" onClick={hideTermsAndConditions}>{msg_general_button_close}</Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {  
  return { show : state.general.termsAndConditionsShowing };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _hideTermsAndConditionsAction: () => dispatch(hideTermsAndConditionsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions);