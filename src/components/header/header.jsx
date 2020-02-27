import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";

import { NavLink } from "react-router-dom";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { ReactComponent as Logo } from "../assets/cobweb.svg";

import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="header">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <NavLink className="logo-container" to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" exact to="/" activeClassName="selected">
          <h3>About Us</h3>
        </NavLink>
        <NavLink
          className="option"
          to="/WebDevelopment"
          activeClassName="selected"
        >
          <h3>Website Development</h3>
        </NavLink>
        <NavLink className="option" to="/Portfolio" activeClassName="selected">
          <h3>Portfolio</h3>
        </NavLink>
        <NavLink className="option" to="/Contact Us" activeClassName="selected">
          <h3>Contact Us</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
