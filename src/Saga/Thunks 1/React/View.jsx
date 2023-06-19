import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {userAction} from '../redux/Comp/Comp.action';


let View = () =>
{

    let dispatch = useDispatch();
    let user = useSelector((state) => {
        return state;
    })

    React.useEffect(() => {
        dispatch(userAction());
    })
    return (
        <>
            <h2> React View..,</h2>
            <hr />

            <div className="container">
                <table className="table table-hover">
                    <thead className="text-white">
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    );
}
export default View;