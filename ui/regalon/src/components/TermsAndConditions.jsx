import React from 'react';
import { msg_footer_text1 } from '../i18n/translation';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideTermsAndConditionsAction } from '../redux/actions/general';

function TermsAndConditions( {show, _hideTermsAndConditionsAction} ) {

  const hideTermsAndConditions = () => {
    _hideTermsAndConditionsAction();
  } 

  return (    
    <Modal show={show} onHide={hideTermsAndConditions}>
      <Modal.Header closeButton >
        <Modal.Title>Regalon - Terminos y Condiciones</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="rgln-secondary" className="elAutoM" onClick={hideTermsAndConditions}>Cerrar</Button>
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