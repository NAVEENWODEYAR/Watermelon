import React from 'react';
import {BrowserRouter as Router, Routes, Link,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';

let App = () =>
{
    return(
        <>
        <Router>
            <h3> React funcional component..,</h3>
            <hr />
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to ="home" className='navbar-brand'> @Boss </Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li  className="navlist"><Link to="/Home" className='nav-link'>Home</Link></li>
                        <li  className="navlist"><Link to="/About" className='nav-link'>About</Link></li>
                        <li  className="navlist"><Link to="/Contact" className='nav-link'>Contact</Link></li>
                        <li  className="navlist"><Link to="/Services" className='nav-link'>Services</Link></li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path ='/Home' Component={Home} />
                <Route path ='/About' Component={About} />
                <Route path ='/Contact' Component={Contact} />
                <Route path ='/Services' Component={Services} />
            </Routes>
            </Router>
        </>
    );
}
export default App;