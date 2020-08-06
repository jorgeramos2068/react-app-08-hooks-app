import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">useContext</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink exact to="/login" className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
