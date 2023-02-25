import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Sdhome.png';
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h2 id='good'>Good Food is<br></br>
                The Foundation of <br></br>
                <span id='genuine'>GENUINE HAPPINESS</span>
                </h2>
                <Link to="/menu">
                    <button id='order'>ORDER NOW</button>
                </Link>
            </div>
            
            
        </div>
    );
}

export default Home;