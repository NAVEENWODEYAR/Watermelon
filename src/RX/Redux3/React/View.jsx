import {useDispatch,useSelector} from 'react-redux';
import { DecrAction, IncrAction } from '../redux/Action/Action.action';

let View = () => {

    let dispacth = useDispatch();

    let counter = useSelector ((state)=> {
            return state;
    })

        // creating the handlers.,
        let incrHandler = () => {
            console.log("Step-1, dispacthing the action from the React View..,");
            dispacth(IncrAction());
        }
        let decrHandler = () => {
            dispacth(DecrAction());
        }
    return (
        <center>
            <h2> React, View dispacthes the action..,</h2>
            <i className='fa fa-plus-circle'  onClick={incrHandler}></i>
            <h2> {counter.counter} </h2>
            <i className='fa fa-minus-circle' onClick={decrHandler}></i>
        </center>
    );
}
export default View;