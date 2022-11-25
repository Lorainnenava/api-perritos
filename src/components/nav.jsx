import React from 'react'
import {Link} from "react-router-dom"
import './nav.css';
export const Nav = () => {
    return (
        <div className="nav">
          <Link to="./Home">Home</Link>
          <Link to="./Dog">Dog</Link>
          <Link to="./Contact">Contact</Link>
        </div>
    );
}
export default Nav;