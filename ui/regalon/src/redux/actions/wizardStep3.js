import {

    UPDATE_DISPLAY_STEP3_REQUEST_ACTION

} from './types';

export const updateDisplayStep3Action = (id, direction) => {
    return { type: UPDATE_DISPLAY_STEP3_REQUEST_ACTION, data: {id : id, direction : direction}  } ;
};