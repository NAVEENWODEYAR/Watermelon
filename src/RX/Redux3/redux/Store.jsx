import { ctrReducer } from "./Action/Reducer";
import {composeWithDevTools} from '@redux-devtools/extension';
import {legacy_createStore as createStore} from 'redux';

let store = createStore(ctrReducer, composeWithDevTools());

export {store};