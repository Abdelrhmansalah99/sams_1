import React from 'react'
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons' 
import '@fortawesome/react-fontawesome';

import LoginForm from '../Screens/RegisterScreen.js';
export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg shadow-lg p-4 mb-5 bg-dark  ">
                <a style={{fontSize : '30px'}} className="navbar-brand" href="..">
                Sams ordering 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{marginLeft: "75%"}} className="collapse navbar-collapse" id="navbarNav">
                <div class="icon icon-user-register"></div>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                        <a style={{fontSize : '20px' }} className="nav-link" href="Login">
                        Login 
                        </a>
                        </li>
                        <li className="nav-item">
                            <a style={{fontSize : '20px'}} className="nav-link" href="/Register">
                            Register 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a style={{fontSize : '20px'}} className="nav-link" href="/Cart">
                            Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}