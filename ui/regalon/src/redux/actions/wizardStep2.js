import {

    STEP2_UPDATE_DISPLAY_ACTION

} from './types';

export const updateDisplayStep2Action = (id, direction) => {
    return { type: STEP2_UPDATE_DISPLAY_ACTION, data: {id : id, direction : direction}  } ;
};