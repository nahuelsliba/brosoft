import {

    UPDATE_DISPLAY_REQUEST_ACTION

} from './types';

export const updateDisplayStep2Action = (id, direction) => {
    return { type: UPDATE_DISPLAY_REQUEST_ACTION, data: {id : id, direction : direction}  } ;
};