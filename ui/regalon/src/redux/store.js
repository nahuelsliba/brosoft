import { createStore, combineReducers } from "redux";
import wizard from "./reducers/wizard";
import wizardStep1 from "./reducers/wizardStep1";
import wizardStep2 from "./reducers/wizardStep2";
import wizardStep3 from "./reducers/wizardStep3";

const rootReducer = combineReducers({
    wizard : wizard,
    wizardStep1: wizardStep1,
    wizardStep2: wizardStep2,
    wizardStep3: wizardStep3
})

export default createStore(rootReducer);