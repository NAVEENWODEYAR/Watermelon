import {Increment, Decrement} from './action';

let initialState = {ctr:0};

let msgReducer = (state=initialState, action) => {

    switch(action.type)
    {
        case 'Increment':
            return ({ctr: state.ctr + 1});
        case 'Decrement':
            return({ctr:state.ctr - 1});
        default :
            return state;
    }
}
export {msgReducer};