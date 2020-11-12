import {

    STEP1_UPDATE_GENDER_ACTION, STEP1_UPDATE_AGE_ACTION, STEP1_VALIDATION_ERRORS_ACTION, STEP1_CLEAR_VALIDATION_ERRORS_ACTION

} from './types';

export const updateGenderAction = (newValue) => {
    return { type: STEP1_UPDATE_GENDER_ACTION, data: newValue } ;
};

export const updateAgeAction = (age, ageInterval, ageFrom, ageTo) => {
    const dataValues = {
        age : age,    
        ageInterval : ageInterval,
        ageFrom : ageFrom,
        ageTo : ageTo
    };
    return { type: STEP1_UPDATE_AGE_ACTION, data: dataValues } ;
};

export const step1ValidationErrorsAction = () => {
    return { type: STEP1_VALIDATION_ERRORS_ACTION } ;
};

export const step1ClearValidationErrorsAction = () => {
    return { type: STEP1_CLEAR_VALIDATION_ERRORS_ACTION } ;
};