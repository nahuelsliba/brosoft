import {

    STEP3_UPDATE_DISPLAY_ACTION

} from './types';

export const updateDisplayStep3Action = (id, direction) => {
    return { type: STEP3_UPDATE_DISPLAY_ACTION, data: {id : id, direction : direction}  } ;
};