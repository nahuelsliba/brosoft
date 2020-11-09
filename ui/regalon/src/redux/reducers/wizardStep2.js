import {

    STEP2_UPDATE_DISPLAY_ACTION

} from '../actions/types';

const TOTAL_POINTS = 15;

const step2InitialState = {
    step2_availablePoints : 0,
    step2_displays : [
        { value : 5 },
        { value : 5 },
        { value : 5 }
    ]
}

const wizardStep2 = (state = step2InitialState, action) => {
    switch (action.type) {
        case STEP2_UPDATE_DISPLAY_ACTION:
            return handleUpdateDisplayAction(state, action);

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

const handleUpdateDisplayAction = (state, action) => {
    if (!canUpdate(action.data.direction, state.step2_availablePoints, state.step2_displays[action.data.id]) ) {
        return { ...state };
    }

    const updatedDisplays = state.step2_displays.slice();
    const updatedDisplay = Object.assign({}, updatedDisplays[action.data.id]);
    updatedDisplay.value = action.data.direction === 1 ? 
        updatedDisplay.value + 1 : updatedDisplay.value - 1;
    updatedDisplays[action.data.id] = updatedDisplay;
    return {
        ...state,
        step2_availablePoints : action.data.direction === 1 ? state.step2_availablePoints - 1 : state.step2_availablePoints + 1,
        step2_displays : updatedDisplays
    };
}

export default wizardStep2;