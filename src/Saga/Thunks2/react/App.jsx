import React from 'react';
import View from './View';

class App extends React.Component
{
    msg = "Good Evening";
    render(props)
    {

        return(
            <>
                <h2 style={{color:"blueviolet",fontSize:"5rem",backgroundColor:"whitesmoke"}}> Thunks middleware..,</h2>
                <hr />
                <h1>{this.msg}</h1>
                <hr />
                <View  t={this.msg}/>
            </>
        );
    }
}
export default App;