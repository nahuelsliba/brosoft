import {

    STEP4_UPDATE_AMOUNT_ACTION

} from '../actions/types';

const step4InitialState = {
    step4_amountFrom : 0,
    step4_amountTo : 20
}

const wizardStep4 = (state = step4InitialState, action) => {
    switch (action.type) {
        case STEP4_UPDATE_AMOUNT_ACTION:
            return handleUpdateAmountAction(state, action);

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

export default wizardStep4;