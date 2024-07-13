import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavLinks = (props) => (
  <ul className='nav-links'>
    <li>
      <NavLink to='/' exact>
        ALL USERS
      </NavLink>
    </li>

    <li>
      <NavLink to='/ui/places'>MY PLACES</NavLink>
    </li>

    <li>
      <NavLink to='/places/new'>NEW PLACE</NavLink>
    </li>

    <li>
      <NavLink to='/auth'>AUTHENTICATE</NavLink>
    </li>
  </ul>
);

export default NavLinks;
