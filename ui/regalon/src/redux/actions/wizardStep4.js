import {

    STEP4_UPDATE_AMOUNT_ACTION, STEP4_VALIDATION_ERRORS_ACTION, STEP4_CLEAR_VALIDATION_ERRORS_ACTION

} from './types';

export const updateAmountAction = (amountFrom, amountTo) => {
    const dataValues = {
        amountFrom : amountFrom,    
        amountTo : amountTo
    };
    return { type: STEP4_UPDATE_AMOUNT_ACTION, data: dataValues } ;
};

export const step4ValidationErrorsAction = () => {
    return { type: STEP4_VALIDATION_ERRORS_ACTION } ;
};

export const step4ClearValidationErrorsAction = () => {
    return { type: STEP4_CLEAR_VALIDATION_ERRORS_ACTION } ;
};