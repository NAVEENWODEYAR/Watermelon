// import action types..,
import {Increment,Decrement} from './message.action';
let initialstate = {counter:0};


let msgReducer = (state=initialstate,action) => {

    switch(action.type)
    {
        case 'Increment':
            console.log("Step-3, creating  the store..,")
            return({counter:state.counter+1});
        case 'Decrement':
            return({counter:state.counter-1});
        default :
            return state;
    }
}

export{msgReducer};