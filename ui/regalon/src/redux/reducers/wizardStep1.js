import {

    STEP1_UPDATE_GENDER_ACTION, STEP1_UPDATE_AGE_ACTION, STEP1_VALIDATION_ERRORS_ACTION, STEP1_CLEAR_VALIDATION_ERRORS_ACTION

} from '../actions/types';

const validationFunction = function (currentState) {
    if (currentState.step1_ageInterval === false) {
        return currentState.step1_age !== null;
    } else if (currentState.step1_ageIntervalFrom === null || 
            currentState.step1_ageIntervalTo === null) {
        return false;
    }
    return (currentState.step1_ageIntervalFrom < currentState.step1_ageIntervalTo);
}

const step1InitialState = {
    step1_gender : '1',
    step1_age : null,
    step1_ageClass : '',
    step1_ageInterval : false,
    step1_ageIntervalFrom : null,
    step1_ageIntervalFromClass : '',
    step1_ageIntervalTo : null,
    step1_ageIntervalToClass : '',
    step1_validationError : false,
    step1_validationFunction : validationFunction
}

const wizardStep1 = (state = step1InitialState, action) => {
    switch (action.type) {
        case STEP1_UPDATE_GENDER_ACTION:
            return handleUpdateGenderAction(state, action);
        case STEP1_UPDATE_AGE_ACTION:
            return handleUpdateAgeAction(state, action);
        case STEP1_VALIDATION_ERRORS_ACTION:
            return handleValidationErrorsAction(state);
        case STEP1_CLEAR_VALIDATION_ERRORS_ACTION:
            return handleClearValidationErrorsAction(state);

        default:
            return state;
    }
}

const handleUpdateGenderAction = (state, action) => {
    return {
        ...state,
        step1_gender : action.data
    };
}

const handleUpdateAgeAction = (state, action) => {
    return {
        ...state,
        step1_age : action.data.age,
        step1_ageInterval : action.data.ageInterval,
        step1_ageIntervalFrom : action.data.ageFrom,
        step1_ageIntervalTo : action.data.ageTo
    };
}

const handleValidationErrorsAction = (state) => {
    let ageClass = '';
    let ageIntervalFromClass = '';
    let ageIntervalToClass = '';

    if (state.step1_ageInterval === false) {
        ageClass = 'inputError';
    } else if ( (state.step1_ageIntervalFrom !== null && state.step1_ageIntervalTo !== null) || 
                (state.step1_ageIntervalFrom === null && state.step1_ageIntervalTo === null) ) {
        ageIntervalFromClass = 'inputError';
        ageIntervalToClass = 'inputError';
    } else if (state.step1_ageIntervalFrom === null) {
        ageIntervalFromClass = 'inputError';
    } else {
        ageIntervalToClass = 'inputError';
    }

    return {
        ...state,
        step1_validationError : true,
        step1_ageClass : ageClass,
        step1_ageIntervalFromClass : ageIntervalFromClass,
        step1_ageIntervalToClass : ageIntervalToClass        
    };
}

const handleClearValidationErrorsAction = (state) => {
    return {
        ...state,
        step1_validationError : false,
        step1_ageClass : '',
        step1_ageIntervalFromClass : '',
        step1_ageIntervalToClass : ''        
    };
}

export default wizardStep1;