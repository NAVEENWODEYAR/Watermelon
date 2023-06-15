import { Increment, Decrement } from "./Action.action";

let initialState = {counter :0};

let ctrReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case 'Increment' :
            return ({counter : state.counter + 1});
        case 'Decrement' :
            return ({counter : state.counter - 1});
        default :
            return state;
    }
}

export {ctrReducer};