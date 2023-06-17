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
            <i className='fa fa-minus-circle' onClick={decrHandler}> </i>
            <p>{count.ctr}</p>
            <i className='fa fa-plus-circle' onClick={incrHandler}> </i>
            <hr />
            <button className='btn btn-success ' onClick={incrHandler}> + </button>
            {/* <pre> {JSON.stringify(count)} </pre> */}
            <pre> {JSON.stringify(count.ctr)} </pre>
            <button className='btn btn-danger ' onClick={decrHandler}> - </button>
            <hr />
            <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{count.ctr}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
        </>
    );
}
export default View;