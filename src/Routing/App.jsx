import React from 'react';
import {Link,BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class App extends React.Component
{

    render()
    {

        return(
            <>
            <Router>
                <nav className='navbar navbar-dark bg-success navbar-expand-lg'>
                    <Link to="#" className='navbar-brand'> WaterMelon </Link>
                        <div className='ml-auto'>
                            <ul className='navbar-nav'>
                                <li className='nav-list'> <Link to="/Home" className='nav-link'> Home </Link></li>
                                <li className='nav-list'> <Link to="/About" className='nav-link'> About </Link></li>
                                <li className='nav-list'> <Link to="/Contact" className='nav-link'> Contact </Link></li>
                                <li className='nav-list'> <Link to="/Services" className='nav-link'> Services </Link></li>
                            </ul>
                        </div>
                </nav>

                    <Routes>
                        <Route path='/Home' Component={Home} />
                        <Route path='/About' Component={About} />
                        <Route path='/Contact' Component={Contact} />
                        <Route path='/Services' Component={Services} />
                    </Routes>
            </Router>
            </>
        );
    }
}

export default App;