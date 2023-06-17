import React from "react";
import './App.css';
import View from "./View";
import {Provider} from 'react-redux';
import {store} from '../redux/Store';

let App = () => {

    return (
        <center>
        <Provider store={store}>
            <center> <h2> React, Redux..,Thunk.., </h2></center>
            <View />
        </Provider>  
        </center>
    );
}
export default App;