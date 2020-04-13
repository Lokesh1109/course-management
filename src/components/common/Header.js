import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    const activeStyle = { color: "green" };

    return (
      <nav>
        <NavLink to="/" exact activeStyle={activeStyle}>
          HomePage
        </NavLink>
        {" | "}
        <NavLink to="/Courses" activeStyle={activeStyle}>
          Courses
        </NavLink>
        {" | "}
        <NavLink to="/About" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    );
  }
}

export default Header;
