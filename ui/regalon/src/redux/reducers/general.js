import {

    SHOW_TERMS_CONDITIONS_ACTION,
    HIDE_TERMS_CONDITIONS_ACTION

} from '../actions/types';

const generalInitialState = {
    termsAndConditionsShowing : false
}

const general = (state = generalInitialState, action) => {
    switch (action.type) {
        case SHOW_TERMS_CONDITIONS_ACTION:
            return handleShowTermsAndConditionsAction(state);
        case HIDE_TERMS_CONDITIONS_ACTION:
            return handleHideTermsAndConditionsAction(state);

        default:
            return state;
    }
}

const handleShowTermsAndConditionsAction = (state) => {
    return {
        ...state,
        termsAndConditionsShowing : true
    };
}

const handleHideTermsAndConditionsAction = (state) => {
    return {
        ...state,
        termsAndConditionsShowing : false
    };
}

export default general;