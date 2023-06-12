import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {incrAction, decrAction} from '../redux/message/action';

let View = () => {

    let dispatch = useDispatch();

    let count = useSelector((state)=>{
        return state;
    })
        // handlers
        let decrHandler = () => {
            dispatch(decrAction());
        }
        let incrHandler = () => {
            dispatch(incrAction());
        }
    return (
        <>
            <pre> React View, triggers an action.., </pre>
            <i className='fa fa-minus circle' onClick={decrHandler}> </i>
            <i className='fa fa-minus circle' onClick={incrHandler}> </i>
            <button className='btn btn-success mr-5' onClick={incrHandler}> + </button>
            {/* <pre> {JSON.stringify(count)} </pre> */}
            <pre> {JSON.stringify(count.ctr)} </pre>
            <button className='btn btn-danger mr-5' onClick={decrHandler}> - </button>
        </>
    );
}
export default View;