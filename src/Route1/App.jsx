import React  from "react";
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Services from './Services';
let App = () =>
{
    return (
        <>
            <Router>
                {/* <nav className='navbar navbar-dark bg-success navbar-expand-lg'> */}
                <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
                    <Link className="navbar-brand" to="/home"> Boss </Link>
                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li className="nav-list"> <Link to="/home" className="nav-link"> Home </Link></li>
                            <li className="nav-list"> <Link to="/services" className="nav-link"> Services </Link></li>
                            <li className="nav-list"> <Link to="/products" className="nav-link"> Products </Link></li>
                            <li className="nav-list"> <Link to="/about" className="nav-link"> About Us </Link></li>
                            <li className="nav-list"> <Link to="/contact" className="nav-link"> Contact Us </Link></li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="home" Component={Home}  />
                    <Route path="services" Component={Services}  />
                </Routes>
            </Router>
        </>
    );
}
export default App;