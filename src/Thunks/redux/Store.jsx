import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { ctrReducer } from "./Comp/Comp.reducer";

let store = createStore(ctrReducer, composeWithDevTools());

export{store}