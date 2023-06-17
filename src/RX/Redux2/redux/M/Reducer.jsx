import {Inc, Dec} from './Action';

let inintialState = {ctr:0};

let ctrReducer = (state = inintialState, action) => {

    switch(action.type)
    {
        case 'Inc':
            return ({ctr:state.ctr+1});
        case 'Dec':
            return ({ctr:state.ctr-1});
        default:
            return state;    
    }
}

export {ctrReducer}