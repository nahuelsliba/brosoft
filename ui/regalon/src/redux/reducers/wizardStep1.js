import {

    STEP1_UPDATE_GENDER_ACTION, STEP1_UPDATE_AGE_ACTION

} from '../actions/types';

const step1InitialState = {
    step1_gender : '1',
    step1_age : null,
    step1_ageInterval : false,
    step1_ageIntervalFrom : null,
    step1_ageIntervalTo : null
}

const wizardStep1 = (state = step1InitialState, action) => {
    switch (action.type) {
        case STEP1_UPDATE_GENDER_ACTION:
            return handleUpdateGenderAction(state, action);
        case STEP1_UPDATE_AGE_ACTION:
            return handleUpdateAgeAction(state, action);

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

export default wizardStep1;