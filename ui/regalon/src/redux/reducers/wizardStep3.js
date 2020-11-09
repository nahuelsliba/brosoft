import {

    STEP3_UPDATE_DISPLAY_ACTION

} from '../actions/types';

const MIN_VALUE = 1;
const MAX_VALUE = 5;

const step3InitialState = {    
    step3_display : { value : 1 }
}

const wizardStep3 = (state = step3InitialState, action) => {
    switch (action.type) {
        case STEP3_UPDATE_DISPLAY_ACTION:
            return handleUpdateDisplayAction(state, action);

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

const handleUpdateDisplayAction = (state, action) => {
    if (!canUpdate(action.data.direction, state.step3_display) ) {
        return { ...state };
    }

    const updatedDisplay = Object.assign({}, state.step3_display);
    updatedDisplay.value = action.data.direction === 1 ? 
        updatedDisplay.value + 1 : updatedDisplay.value - 1;
    return {
        ...state,
        step3_display : updatedDisplay
    };
}

export default wizardStep3;