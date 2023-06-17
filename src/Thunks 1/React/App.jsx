import React from "react";
import View from "./View";
import {Provider} from 'react-redux';
import {store} from '../redux/Store';

let App = () => {

    return (
        <>
        <Provider store={store}>
             <h1> Thunks,. middleware..,</h1>
            <hr />
             <View />  
        </Provider>
           
        </>
    );
}
export default App;