import {

    STEP4_UPDATE_AMOUNT_ACTION, STEP4_VALIDATION_ERRORS_ACTION, STEP4_CLEAR_VALIDATION_ERRORS_ACTION

} from '../actions/types';

import { isEmpty } from '../../helpers/validationHelper';

const validationFunction = function (currentState) {
    if (isEmpty(currentState.step4_amountFrom) || isEmpty(currentState.step4_amountTo)) {
        return false;
    }
    return (currentState.step4_amountFrom < currentState.step4_amountTo);
}

const step4InitialState = {
    step4_amountFrom : 0,
    step4_amountFromClass : '',
    step4_amountTo : 20,
    step4_amountToClass : '',
    step4_validationError : false,
    step4_validationFunction : validationFunction
}

const wizardStep4 = (state = step4InitialState, action) => {
    switch (action.type) {
        case STEP4_UPDATE_AMOUNT_ACTION:
            return handleUpdateAmountAction(state, action);
        case STEP4_VALIDATION_ERRORS_ACTION:
            return handleValidationErrorsAction(state, action);
        case STEP4_CLEAR_VALIDATION_ERRORS_ACTION:
            return handleClearValidationErrorsAction(state, action);

        default:
            return state;
    }
}

const handleUpdateAmountAction = (state, action) => {
    return {
        ...state,
        step4_amountFrom : action.data.amountFrom,
        step4_amountTo : action.data.amountTo
    };
}

const handleValidationErrorsAction = (state) => {
    let amountFromClass = '';
    let amountToClass = '';

    if ( (isEmpty(state.step4_amountFrom) && isEmpty(state.step4_amountTo)) || 
         (!isEmpty(state.step4_amountFrom) && !isEmpty(state.step4_amountTo)) ) {
        amountFromClass = 'inputError';
        amountToClass = 'inputError';
    } else if (isEmpty(state.step4_amountFrom)) {
        amountFromClass = 'inputError';
    } else {
        amountToClass = 'inputError';
    }

    return {
        ...state,
        step4_validationError : true,
        step4_amountFromClass : amountFromClass,
        step4_amountToClass : amountToClass        
    };
}

const handleClearValidationErrorsAction = (state) => {
    return {
        ...state,
        step4_validationError : false,
        step4_amountFromClass : '',
        step4_amountToClass : ''        
    };
}

export default wizardStep4;