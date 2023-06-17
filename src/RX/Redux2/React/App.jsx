import React,{Component} from 'react';
import {Provider} from 'react-redux'
import { Store } from '../redux/Store';
import View from './View';
class App extends Component
{

    render()
    {

        return(
            <>
            <Provider store={Store}>
                <View/>
            </Provider>
            </>
        );
    }
}
export default App;