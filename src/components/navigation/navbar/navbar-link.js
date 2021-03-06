import React from 'react';
import {Link} from 'gatsby';

const NavBarLink = (props) => {
    return (
        <li className="nav-item">
          <Link to={props.to} className="nav-link active" aria-current="page">{props.title}</Link>
        </li>
    )
}

export default NavBarLink;