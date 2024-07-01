import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand mx-5">Contact app M.D</Link>
        </nav>
    );
}

export default Navbar;