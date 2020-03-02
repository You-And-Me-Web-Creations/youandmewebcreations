import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";

import { NavLink } from "react-router-dom";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { ReactComponent as Logo } from "../assets/web_sq.svg";

import {
  HeaderContainer,
  LogoContainer,
  TitleContainer
} from "./header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <TitleContainer>You and Me Web Creations</TitleContainer>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
