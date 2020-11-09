import { createStore, combineReducers } from "redux";
import wizard from "./reducers/wizard";
import wizardStep1 from "./reducers/wizardStep1";
import wizardStep2 from "./reducers/wizardStep2";
import wizardStep3 from "./reducers/wizardStep3";
import wizardStep4 from "./reducers/wizardStep4";

const rootReducer = combineReducers({
    wizard : wizard,
    wizardStep1: wizardStep1,
    wizardStep2: wizardStep2,
    wizardStep3: wizardStep3,
    wizardStep4: wizardStep4
})

export default createStore(rootReducer);