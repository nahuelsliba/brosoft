import {

    UPDATE_DISPLAY_REQUEST_ACTION

} from '../actions/types';

const TOTAL_POINTS = 15;

const step2InitialState = {
    availablePoints : 0,
    displays : [
        { value : 5 },
        { value : 5 },
        { value : 5 }
    ]
}

const wizardStep2 = (state = step2InitialState, action) => {
    switch (action.type) {
        case UPDATE_DISPLAY_REQUEST_ACTION:
            return handleUpdateDisplayRequestAction(state, action);

        default:
            return state;
    }
}

const canUpdate = (direction, availablePoints, itemToUpdate) => {
    if (direction === 1) {  //adding (+)
        return availablePoints > 0;
    }     
    if (direction !== 1) {  //subtracting (-)
        return availablePoints < TOTAL_POINTS && itemToUpdate.value > 0;
    }
}

const handleUpdateDisplayRequestAction = (state, action) => {
    if (!canUpdate(action.data.direction, state.availablePoints, state.displays[action.data.id]) ) {
        return { ...state };
    }

    const updatedDisplays = state.displays.slice();
    const updatedDisplay = Object.assign({}, updatedDisplays[action.data.id]);
    updatedDisplay.value = action.data.direction === 1 ? 
        updatedDisplay.value + 1 : updatedDisplay.value - 1;
    updatedDisplays[action.data.id] = updatedDisplay;
    return {
        ...state,
        availablePoints : action.data.direction === 1 ? state.availablePoints - 1 : state.availablePoints + 1,
        displays : updatedDisplays
    };
}

export default wizardStep2;