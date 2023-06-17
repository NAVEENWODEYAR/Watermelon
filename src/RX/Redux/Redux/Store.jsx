import {createStore} from 'redux';
import{composeWithDevTools} from '@redux-devtools/extension';
import { msgReducer } from './message/message.reducer';

let store = createStore(msgReducer,composeWithDevTools());
console.log("Step-4, Updating to the React View,,.");

export {store}