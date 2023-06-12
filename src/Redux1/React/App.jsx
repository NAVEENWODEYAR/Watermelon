import React from "react";
import View from "./View";
import {Provider} from 'react-redux';
import {store} from '../redux/store';

let App = () => {

    return(
        <>
        <center>
        <Provider store={store}>
            <p> Redux,,.</p>
            <View/>
        </Provider>
        </center>
        </>
    );
}
export default App;