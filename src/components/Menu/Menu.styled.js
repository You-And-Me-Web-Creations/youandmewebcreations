import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.palletOrange};
  transform: ${({ open }) => (open ? "translateX(10%)" : "translateX(110%)")};
  height: 45vh;
  text-align: left;
  padding: 10rem 2rem;
  position: absolute;
  top: 4%;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 400px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 400px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: red;
    }
  }
`;

export const OptionLink = styled(Link)`
  padding: 5px 10px;
  color: black;
  cursor: pointer;

  &:selected {
    color: red;
  }
`;
