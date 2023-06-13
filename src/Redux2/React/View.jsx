import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { IncrAction, DecrAction } from '../redux/M/Action';
import './View.css';

let View = () => {

    let dispatch = useDispatch();

    let counter = useSelector((state) => {
        return state;
    })
        let incrHanler = () => {
            dispatch(IncrAction());
        }

        let decrHandler = () => {
            dispatch(DecrAction());
        }
    return(
        <center>
           <button className='btn btn-warning mr-4'> <i className='fa fa-minus-circle' onClick={decrHandler}> </i></button>
            {/* <h1> {counter.ctr} </h1> */}
            <input style={{textAlign:"center",borderBlockColor:"HighlightText"}} type="number" value={counter.ctr} />
            <button className='bt btn-primary ml-4'><i className='fa fa-plus-circle' onClick={incrHanler}></i></button>
        </center>
    );
}

export default View;
