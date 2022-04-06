import React from 'react'

import chickdayUpdatedLogoPng from '../assetsPictures/preview.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src = {chickdayUpdatedLogoPng} width="150" height="70" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to = "home" smooth = {true} duration = {500}> Home </Link>

                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to = "browse" smooth = {true} duration = {1000}> Our Menu </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to = "contact" smooth = {true} duration = {2000}> Contact Us </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to = "about" smooth = {true} duration = {300}> About Us </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar