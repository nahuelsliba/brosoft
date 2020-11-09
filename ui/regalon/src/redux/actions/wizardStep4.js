import {

    STEP4_UPDATE_AMOUNT_ACTION

} from './types';

export const updateAmountAction = (amountFrom, amountTo) => {
    const dataValues = {
        amountFrom : amountFrom,    
        amountTo : amountTo
    };
    return { type: STEP4_UPDATE_AMOUNT_ACTION, data: dataValues } ;
};