import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to = "/search">
                    <a className="nav-link" href="#">Search </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to = "/saved">
                    <a className="nav-link" href="#">Saved</a>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;