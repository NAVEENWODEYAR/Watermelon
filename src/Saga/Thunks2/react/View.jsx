import React,{Component} from 'react';

class View extends Component
{
    imgs = 'https://images.pexels.com/photos/2043739/pexels-photo-2043739.jpeg?auto=compress&cs=tinysrgb&w=800';
    render(props)
    {
        return(
            <>
            <div>
                <img style={{width:"1200px"}} src={'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800'} />
                <hr />
                <img src={this.imgs} style={{height:"800px"}}/>
            </div>
            </>
        );
    }
}

export default View;