import {

    UPDATE_VALUE_REQUEST_ACTION

} from '../actions/types';

const step1InitialState = {
    textStep1 : 'fromStore'
}

const wizardStep1 = (state = step1InitialState, action) => {
    switch (action.type) {
        case UPDATE_VALUE_REQUEST_ACTION:
            return handleGetUserPetsRequestAction(state, action);

        default:
            return state;
    }
}

const handleGetUserPetsRequestAction = (state, action) => {
    return {
        ...state,
        textStep1 : action.data
    };
}

export default wizardStep1;