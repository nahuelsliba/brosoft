import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateTextStep1Action } from '../redux/actions/wizardStep1';

function WizardContentStep1( { textStep1, _updateTextStep1Action } ) {

  const [gender, setGender] = useState('gender');
  const [showAgeInterval, setShowAgeInterval] = useState(false);

  const handleOnChangeTextStep1 = (input) => {
    console.log(input.target.value);
    _updateTextStep1Action(input.target.value);
  }

  const handleOnChangeGender = (input) => {
    setGender(getGenderNameByCode(input.target.value));
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

  const handleOnChangeAgeCheck = (input) => {
    setShowAgeInterval(!showAgeInterval);
  }

  return (
    <div className="WizardContentStep1">
    
      <Form>        
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>El regalo es para: </Form.Label>
          <Form.Control as="select" onChange={handleOnChangeGender}>
            <option value="1">{ getGenderNameByCode("1") }</option>
            <option value="2">{ getGenderNameByCode("2") }</option>
            <option value="3">{ getGenderNameByCode("3") }</option>
            <option value="4">{ getGenderNameByCode("4") }</option>
            <option value="7">{ getGenderNameByCode("7") }</option>
          </Form.Control>
        </Form.Group>       
        
        <Form.Group>     
          <Form.Label>Que tiene tantos anios: </Form.Label>     
          <Form.Control type="text" placeholder="Edad" disabled={showAgeInterval}/>
        </Form.Group>        
        <div key="default-chackbox" className="mb-3">
          <Form.Check type="checkbox" id="default-chackbox" label="No se la edad exacta." onChange={handleOnChangeAgeCheck} />
        </div>
        {showAgeInterval && 
        <Form.Group>               
          <Form.Label>Al menos: </Form.Label>     
          <Form.Control type="text" placeholder="anios" />
          <Form.Label>y no mas de: </Form.Label>     
          <Form.Control type="text" placeholder="anios" />
        </Form.Group>
        }
      </Form>

    </div>
  );
}

const mapStateToProps = (state) => {  
  return { textStep1 : state.wizardStep1.textStep1 };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _updateTextStep1Action: (newValue) => dispatch(updateTextStep1Action(newValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentStep1);