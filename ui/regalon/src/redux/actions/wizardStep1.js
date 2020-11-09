import {

    STEP1_UPDATE_GENDER_ACTION, STEP1_UPDATE_AGE_ACTION

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