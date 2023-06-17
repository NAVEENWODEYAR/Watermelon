import Axios from 'axios';
// create the action types..,
let Usr_Req = 'Usr_Req';
let Usr_Suces = 'Usr_Suces';
let Usr_Fail = 'Usr_Fail';


    let usrReq = () => {
        return ({ type : Usr_Req});
    }
    let usrSuces = (user) => {
        return ({ type : usrSuces , payload:user});
    }
    let usrFail = () => {
        return ({ type : Usr_Fail, payload:"Failed"});
    }
let userAction = () => {

    return async (dispatch) => {
        dispatch((usrReq()))
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(usrSuces(response.data))
            })
            .catch((err) => {
                dispatch(usrFail);
            })
    }
}
export {userAction, Usr_Fail, Usr_Req, Usr_Suces}