import React from "react";

// @ts-ignore
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <NavLink to="/" className="navbar-brand">
        Twitter
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <NavLink to="/" className="nav-link" exact activeClassName="active">
            Tweets
          </NavLink>
          <NavLink
            to="/create"
            className="nav-link"
            exact
            activeClassName="active"
          >
            Create Tweet
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
