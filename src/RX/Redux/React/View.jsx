import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {incrAction, decrAction} from '../Redux/message/message.action'

let View = () => {

        let count = useSelector((state)=>{
            return state;
        })
    // Creating the handlers
        let incrHandler = () => {
            console.log("Step-1, dispatching the action.,");
            dispatch(incrAction());
        }
        let decrHandler = () => {
            dispatch(decrAction());
        }
    let dispatch = useDispatch();
    return(
        <>
        <center>
            <pre> React View- dispatches the action using the (useDispatch)</pre>
            <hr />
            <button className='btn btn-primary' onClick={incrHandler}> + </button>
            {/* <p> {JSON.stringify(count)} </p> */}
            <pre>{count.counter}</pre>
            <button className='btn btn-success' onClick={decrHandler}> - </button></center>
        </>
    );
}

export default View;