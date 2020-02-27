import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="website development">
          &#x1f578;
        </span>
        Website <br /> Development
      </a>
      <a href="/">
        <span role="img" aria-label="portfolio">
          &#x1f5BC;
        </span>
        Portfolio
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
