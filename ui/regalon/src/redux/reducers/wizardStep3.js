import {

    UPDATE_DISPLAY_STEP3_REQUEST_ACTION

} from '../actions/types';

const MIN_VALUE = 1;
const MAX_VALUE = 5;

const step3InitialState = {    
    display : { value : 1 }
}

const wizardStep3 = (state = step3InitialState, action) => {
    switch (action.type) {
        case UPDATE_DISPLAY_STEP3_REQUEST_ACTION:
            return handleUpdateDisplayRequestAction(state, action);

        default:
            return state;
    }
}

const canUpdate = (direction, itemToUpdate) => {
    if (direction === 1) {  //adding (+)
        return itemToUpdate.value < MAX_VALUE;
    }     
    if (direction !== 1) {  //subtracting (-)
        return itemToUpdate.value > MIN_VALUE;
    }
}

const handleUpdateDisplayRequestAction = (state, action) => {
    if (!canUpdate(action.data.direction, state.display) ) {
        return { ...state };
    }

    const updatedDisplay = Object.assign({}, state.display);
    updatedDisplay.value = action.data.direction === 1 ? 
        updatedDisplay.value + 1 : updatedDisplay.value - 1;
    return {
        ...state,
        display : updatedDisplay
    };
}

export default wizardStep3;