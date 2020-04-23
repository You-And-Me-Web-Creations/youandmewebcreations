import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 2px;

  @media screen and (min-width: 450px) {
    height: 150px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  padding: 0px;

  @media screen and (min-width: 450px) {
    width: 200px;
    left: 0;
  }
`;

export const TitleContainer = styled.h1`
max-width: 200;
  color: black;
  position: absolute;
  top: 5%;
  left: 40%;
  letter-spacing: normal;
  transform: translate(-50%, -50%);

   @media screen and(min-width: 450 px) {
     left: 50%;
   }
`;
