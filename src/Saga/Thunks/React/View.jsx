import {useDispatch,useSelector} from 'react-redux';
import { decrAction, incrAction } from '../redux/Comp/Comp.action';

let View = () => {
    let dispatch = useDispatch();
    let ctr = useSelector((state) => {
        return state;
    }) 
        // creating the handlers
        let decrHandler = () => {
            dispatch(decrAction());
        }
        let incrHandler = () => {
            dispatch(incrAction());
        }

    return (
        <>
            <h3> React View, dispatches the action.,</h3>
            <button> <i className='fa fa-minus-circle' onClick={decrHandler}></i> </button>
            <h1> {ctr.counter} </h1>
            <button> <i className='fa fa-plus-circle' onClick={incrHandler}></i> </button>
        </>
    );
}
export default View;