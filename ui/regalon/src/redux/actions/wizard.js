import {

    INITIAL_VIEW_REQUEST_ACTION,
    INIT_WIZARD_REQUEST_ACTION,
    NEXT_STEP_REQUEST_ACTION,
    PREVIOUS_STEP_REQUEST_ACTION,    
    RESET_WIZARD_REQUEST_ACTION,

    SEARCH_PRODUCTS_REQUEST_ACTION,
    SEARCH_PRODUCTS_SUCCESS_ACTION,
    SEARCH_PRODUCTS_FAILURE_ACTION

} from './types';

export const initialViewAction = () => {
    return { type: INITIAL_VIEW_REQUEST_ACTION } ;
};

export const initWizardAction = () => {
    return { type: INIT_WIZARD_REQUEST_ACTION } ;
};

export const nextStepAction = () => {
    return { type: NEXT_STEP_REQUEST_ACTION } ;
};

export const previousStepAction = () => {
    return { type: PREVIOUS_STEP_REQUEST_ACTION } ;
};

export const resetWizardAction = () => {
    return { type: RESET_WIZARD_REQUEST_ACTION } ;
};

export const searchProductsRequestAction = () => {
    return { type: SEARCH_PRODUCTS_REQUEST_ACTION } ;
};

export const searchProductsSuccessAction = (response) => {
    return { type: SEARCH_PRODUCTS_SUCCESS_ACTION, data: response } ;
};

export const searchProductsFailureAction = (error) => {
    return { type: SEARCH_PRODUCTS_FAILURE_ACTION, data: error } ;
};