import {

    UPDATE_VALUE_REQUEST_ACTION

} from './types';

export const updateTextStep1Action = (newValue) => {
    return { type: UPDATE_VALUE_REQUEST_ACTION, data: newValue } ;
};