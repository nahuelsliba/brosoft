import {

    INITIAL_VIEW_REQUEST_ACTION,
    INIT_WIZARD_REQUEST_ACTION,
    NEXT_STEP_REQUEST_ACTION,
    PREVIOUS_STEP_REQUEST_ACTION,
    
    RESET_WIZARD_REQUEST_ACTION,

    SEARCH_PRODUCTS_REQUEST_ACTION,
    SEARCH_PRODUCTS_SUCCESS_ACTION,
    SEARCH_PRODUCTS_FAILURE_ACTION

} from '../actions/types';

const wizardInitialState = {
    currentStep : 0,
    isSearchProudctsFetching : false,
    error : null,
    searchProudctsJson : {},
    showResultItems : false
}

const wizard = (state = wizardInitialState, action) => {
    switch (action.type) {
        case INITIAL_VIEW_REQUEST_ACTION:
            return handleInitialViewRequestAction(state);
        case INIT_WIZARD_REQUEST_ACTION:
            return handleInitWizardRequestAction(state);
        case NEXT_STEP_REQUEST_ACTION:
            return handleNextStepRequestAction(state);
        case PREVIOUS_STEP_REQUEST_ACTION:
            return handlePreviousStepRequestAction(state);        
        case RESET_WIZARD_REQUEST_ACTION:
            return handleResetWizardRequestAction(state);

        case SEARCH_PRODUCTS_REQUEST_ACTION:
            return handleSearchProductsRequestAction(state);
        case SEARCH_PRODUCTS_SUCCESS_ACTION:
            return handleSearchProductsSuccessAction(state, action);
        case SEARCH_PRODUCTS_FAILURE_ACTION:
            return handleSearchProductsFailureAction(state, action);

        default:
            return state;
    }
}

const handleInitialViewRequestAction = (state) => {
    return {
        ...state,
        currentStep : 0
    };
}

const handleInitWizardRequestAction = (state) => {
    return {
        ...state,
        currentStep : 1
    };
}

const handleNextStepRequestAction = (state) => {
    return {
        ...state,
        currentStep : state.currentStep < 5 ? state.currentStep + 1 : state.currentStep
    };
}

const handlePreviousStepRequestAction = (state) => {
    return {
        ...state,
        currentStep : state.currentStep > 1 ? state.currentStep - 1 : state.currentStep
    };
}

const handleResetWizardRequestAction = (state) => {
    return {
        ...state,
        showResultItems : false,
        currentStep : 1
    };
}

const handleSearchProductsRequestAction = (state) => {
    return {
        ...state,
        isSearchProudctsFetching : true
    };
}

const handleSearchProductsSuccessAction = (state, action) => {
    return {
        ...state,
        isSearchProudctsFetching : false,
        searchProudctsJson : action.data,
        showResultItems : true
    };
}

const handleSearchProductsFailureAction = (state, action) => {
    return {
        ...state,
        isSearchProudctsFetching : false,
        error : action.data
    };
}

export default wizard;