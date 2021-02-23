import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <ul>
            <li><Link to="/">Page1</Link></li>
            <li><Link to="./Page2">Page2</Link></li>
            <li><Link to="./Page3">Page3</Link></li>
        </ul>
    );
}

export default NavBar;