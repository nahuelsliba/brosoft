import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateGenderAction, updateAgeAction } from '../redux/actions/wizardStep1';
import { validOnlyNumbers } from '../helpers/validationHelper';
import { 
  msg_wizard_step1_gender_label, msg_wizard_step1_age_label,
  msg_wizard_step1_age_interval_label, msg_wizard_step1_age_interval_from_label, msg_wizard_step1_age_interval_to_label
} from '../i18n/translation';

function WizardContentStep1( { gender, age, ageClass, ageInterval, ageIntervalFrom, ageIntervalFromClass, 
    ageIntervalTo, ageIntervalToClass, _updateGenderAction, _updateAgeAction } ) {

  const handleOnChangeGender = (input) => {
    _updateGenderAction(input.target.value);
  }

  const getGenderNameByCode = (code) => {
    switch (code) {
      case '1':
          return 'Una mujer';
      case '2':
          return 'Un hombre';
      case '3':
          return 'Una ninia';
      case '4':
          return 'Un ninio';
      case '5':
          return 'Un perro';
      case '6':
          return 'Un gato';
      case '7':
          return 'Otro';
      case '8':
          return 'No importa';

      default:
          return '';
    }
  }

  const handleOnChangeAge = (input) => {
    if (validOnlyNumbers(input)) {
      _updateAgeAction(input.target.value, ageInterval, ageIntervalFrom, ageIntervalTo);
    }
  }

  const handleOnChangeAgeCheck = (input) => {
    _updateAgeAction(age, !ageInterval, ageIntervalFrom, ageIntervalTo);
  }

  const handleOnChangeAgeIntervalFrom = (input) => {
    if (validOnlyNumbers(input)) {
      _updateAgeAction(age, ageInterval, input.target.value, ageIntervalTo);
    } 
  }

  const handleOnChangeAgeIntervalTo = (input) => {
    if (validOnlyNumbers(input)) {
      _updateAgeAction(age, ageInterval, ageIntervalFrom, input.target.value);
    }
  }

  return (
    <div className="WizardContentStep1">
    
      <Form>        
        <Form.Group controlId="exampleForm.ControlSelect1" className="fGSelect">
          <Form.Label>{msg_wizard_step1_gender_label}</Form.Label>
          <Form.Control as="select" onChange={handleOnChangeGender}>
            <option value="1">{ getGenderNameByCode("1") }</option>
            <option value="2">{ getGenderNameByCode("2") }</option>
            <option value="7">{ getGenderNameByCode("7") }</option>
          </Form.Control>
        </Form.Group>       
        
        <Form.Group className="fGTextInputS">     
          <Form.Label>{msg_wizard_step1_age_label}</Form.Label>     
          <Form.Control type="text" placeholder="Edad" maxLength="2" className={ageClass}
            disabled={ageInterval} onChange={handleOnChangeAge} value={age}/>
        </Form.Group>        
        <div key="default-checkbox" className="mb-3">          
          <Form.Check className="fGCheckboxInput" type="checkbox" id="default-checkbox" checked={ageInterval}
            label={msg_wizard_step1_age_interval_label} onChange={handleOnChangeAgeCheck} />
        </div>
        {ageInterval && 
        <Form.Group className="fGTextInputS">               
          <Form.Label>{msg_wizard_step1_age_interval_from_label}</Form.Label>     
          <Form.Control type="text" placeholder="anios" maxLength="2" value={ageIntervalFrom}
            onChange={handleOnChangeAgeIntervalFrom} className={ageIntervalFromClass}/>
          <Form.Label>{msg_wizard_step1_age_interval_to_label}</Form.Label>     
          <Form.Control type="text" placeholder="anios" maxLength="2" value={ageIntervalTo}
            onChange={handleOnChangeAgeIntervalTo} className={ageIntervalToClass}/>
        </Form.Group>
        }
      </Form>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gender : state.wizardStep1.step1_gender,
    age : state.wizardStep1.step1_age,
    ageClass : state.wizardStep1.step1_ageClass,
    ageInterval : state.wizardStep1.step1_ageInterval,
    ageIntervalFrom : state.wizardStep1.step1_ageIntervalFrom,
    ageIntervalFromClass : state.wizardStep1.step1_ageIntervalFromClass,
    ageIntervalTo : state.wizardStep1.step1_ageIntervalTo,
    ageIntervalToClass : state.wizardStep1.step1_ageIntervalToClass
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateGenderAction: (newValue) => dispatch(updateGenderAction(newValue)),
      _updateAgeAction: (age, ageInterval, ageFrom, ageTo) => dispatch(updateAgeAction(age, ageInterval, ageFrom, ageTo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep1);