import {

    SHOW_TERMS_CONDITIONS_ACTION,
    HIDE_TERMS_CONDITIONS_ACTION

} from './types';

export const showTermsAndConditionsAction = () => {
    return { type: SHOW_TERMS_CONDITIONS_ACTION } ;
};

export const hideTermsAndConditionsAction = () => {
    return { type: HIDE_TERMS_CONDITIONS_ACTION } ;
};
