import React from 'react';
import { connect } from 'react-redux';
import { 
  msg_wizard_summary_text1, msg_wizard_summary_text2
} from '../i18n/translation';

function WizardContentStepsSummary( { gender, age, ageInterval, ageIntervalFrom, ageIntervalTo, 
  creativity, sporty, intellectual, reliability, amountFrom, amountTo } ) {

  const getGenderText = (gender) => {
    switch (gender) {
      case '1':
          return ' una mujer';
      case '2':
          return ' un hombre';
      case '3':
          return ' una ninia';
      case '4':
          return ' un ninio';
      case '7':
          return ' otro';
      default:
          return ' ';
    }
  }

  const getAgeText = (age, ageInterval, ageIntervalFrom, ageIntervalTo) => {
    if (ageInterval) {
      return ' de entre ' + ageIntervalFrom + ' y ' + ageIntervalTo + ' anios';
    }
    return ' ' + age + 'anios';
  }

  const getPersonalityText = (creativity, sporty, intellectual) => {
    let distUmbral = 2;    
    var dist1 = Math.abs(creativity - sporty);
    var dist2 = Math.abs(creativity - intellectual);
    var dist3 = Math.abs(sporty - intellectual);
    if (dist1 < distUmbral && dist2 < distUmbral && dist3 < distUmbral) {
      let minPointsUmbral = 10;
      if (creativity + sporty + intellectual < minPointsUmbral) {
        return ' no lo se';
      }
      return ' multifacetica';
    }

    var personality = ' creativa';
    if (sporty > creativity && sporty > intellectual) {
      personality = ' sporty';
    } else if (intellectual > creativity && intellectual > sporty) {
      personality = ' intellectual';
    }
    return personality;
  }

  const getReliabilityText = (reliability) => {
    switch (reliability) {
      case 1:
        return ' muy poca confianza';
      case 2:
        return ' poca confianza';
      case 3:
        return ' moderada confianza';
      case 4:
        return ' bastante confianza';
      case 5:
        return ' mucha confianza';
      default:
          return ' ';
    }
  }

  const getAmountText = (amountFrom, amountTo) => {
    return ' y quiero gastar entre ' + amountFrom + ' y ' + amountTo + ' euros.';
  }

  return (
    <div className="WizardContentStepsSummary">
      <p> 
          {msg_wizard_summary_text1}
          {getGenderText(gender)}, 
          {getAgeText(age, ageInterval, ageIntervalFrom, ageIntervalTo)}
          {getPersonalityText(creativity, sporty, intellectual)}
          {getReliabilityText(reliability)}
          {getAmountText(amountFrom, amountTo)}
      </p>
      <p> {msg_wizard_summary_text2} </p>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { 
    gender : state.wizardStep1.step1_gender,
    age : state.wizardStep1.step1_age,
    ageInterval : state.wizardStep1.step1_ageInterval,
    ageIntervalFrom : state.wizardStep1.step1_ageIntervalFrom,
    ageIntervalTo : state.wizardStep1.step1_ageIntervalTo,

    creativity : state.wizardStep2.step2_displays[0].value,
    sporty : state.wizardStep2.step2_displays[1].value,
    intellectual : state.wizardStep2.step2_displays[2].value,

    reliability : state.wizardStep3.step3_display.value,

    amountFrom : state.wizardStep4.step4_amountFrom,
    amountTo : state.wizardStep4.step4_amountTo
  };
}

export default connect(mapStateToProps)(WizardContentStepsSummary);