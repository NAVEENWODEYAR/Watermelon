import {userAction, Usr_Fail, Usr_Req, Usr_Suces} from './Comp.action';

let initialState = {user:[]};

let usrReducer = (state=initialState, action) => {
    console.log(action);
    console.log(action.type);
        switch(action.type)
        {
            case 'Usr_Req':
                return ({ user : []});
            case 'Usr_Suces':
                return ({ user : action.payload});
            default :
                return state;        
        }
}
export {usrReducer};