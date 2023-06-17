import {Incr, Decr} from './Comp.action';

let initialState = {counter:0};
let ctrReducer = (state=initialState, action) => {
    switch (action.type)
    {
        case 'Incr' :
            return ({counter : state.counter + 1});
        case 'Decr' :
            return ({counter : state.counter - 1});
        default:
            return state;
    }
}
export {ctrReducer};