import {legacy_createStore as createStore} from 'redux';
import { ctrReducer } from '../redux/M/Reducer';
import {composeWithDevTools} from '@redux-devtools/extension';
// import {configureStore} from '@redux/toolkit'

let Store = createStore(ctrReducer, composeWithDevTools());
// let Store = configureStore(ctrReducer, composeWithDevTools());
export {Store};