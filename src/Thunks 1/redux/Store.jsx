import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {usrReducer} from './Comp/Comp.reducer';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

let store  = createStore(usrReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export {store};