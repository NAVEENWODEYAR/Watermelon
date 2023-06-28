import React from 'react';
import b from './Imgs/b.jpg';
import t1 from './Imgs/t1.jpg';

let Services = () => {

    return(
        <>
             <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
               
            </nav>
            <hr />
                <h1> Services Page..,</h1>
                
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={b} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={t1} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
            </div>
        </>
    );
}
export default Services;