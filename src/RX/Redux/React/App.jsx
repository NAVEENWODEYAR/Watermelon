import React from 'react';
import View from './View';
import {Provider} from 'react-redux';
import {store} from '../Redux/Store';

let App = () => {

    return(
        <>
            <Provider store={store}>
                <h1> Redux,state management tool..,</h1>
                <hr />
                <View/>
            </Provider>
        </>
    );
}
export default App;