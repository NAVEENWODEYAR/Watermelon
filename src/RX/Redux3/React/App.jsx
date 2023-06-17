import React from 'react';
import './App.css';
import View from './View';
import { Provider } from 'react-redux';
import {store} from '../redux/Store';
let App = () => {

    return (
        <>
        <Provider store={store}>
            <center> <h1 style={{color:"tomato",fontSize:"10rem"}}> Redux,,. </h1></center>
            <hr />
            <View/>
        </Provider>
        </>
    );
}
export default App;