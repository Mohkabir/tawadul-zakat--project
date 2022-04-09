import React, { useState } from 'react'
import {Link} from "react-router-dom";

import logo from '../assets/img/islam-logo.jpg'

const NavBar = () => {
    const [mobile , setMobile] = useState(true)
    return (
        <nav>
            <div className="nav flex max-width">
                <div className="nav-logo flex">
                    <img className="logo-img" src={logo} alt="islam logo"/>
                    <div className="logo-heading">
                        <h1>
                            <span className="blue">Islamic Relief
                            </span>
                            <br />
                            WorldWide
                        </h1>
                    </div>
                </div>
                <ul className={mobile ? "nav-list flex" : "nav-mobile"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/media">Media</Link>
                    </li>
                </ul>
                <div className='menu-div'>
                <div className="menu flex">
                    <div className="nav-btn">
                        <button>Donate</button>
                    </div>
                    <div 
                    className={mobile ? "dash"  : "dash cancel"}
                    onClick={() => setMobile(!mobile)}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar