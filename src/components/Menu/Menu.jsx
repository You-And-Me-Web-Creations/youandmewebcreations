import React from "react";

import { bool } from "prop-types";
import { StyledMenu, OptionLink } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <OptionLink
        exact
        to="/"
        activeClassName="selected"
        onClick={() => setOpen(false)}
      >
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </OptionLink>
      <OptionLink
        to="/WebDevelopment"
        activeClassName="selected"
        onClick={() => setOpen(false)}
      >
        <span role="img" aria-label="website development">
          &#x1f578;
        </span>
        Website <br /> Development
      </OptionLink>
      <OptionLink
        to="/Portfolio"
        activeClassName="selected"
        onClick={() => setOpen(false)}
      >
        <span role="img" aria-label="portfolio">
          &#x1f5BC;
        </span>
        Portfolio
      </OptionLink>
      <OptionLink
        to="/Contact_Us"
        activeClassName="selected"
        onClick={() => setOpen(false)}
      >
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact Us
      </OptionLink>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
