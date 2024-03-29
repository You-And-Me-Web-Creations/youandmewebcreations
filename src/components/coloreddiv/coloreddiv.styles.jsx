import styled from "styled-components";

export const ColoredDivContainer = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.bg};
  padding: 3rem;
  margin: 1rem auto 0 auto;
  color: ${props => props.fc};
  transform: ${props => props.rotation};

  @media screen and (min-width: 1500px) {
    margin: 1rem auto 2rem auto;
  }

  @media screen and (max-width: 450px) {
    margin: auto;
    padding: 0.5rem;
    width: 70%;
  }
`;

export const DivText = styled.div `
  width: 100%;
  color: ${props => props.fc};

  a {
    color: ${props => props.fc};
    text-transform: uppercase;
  }
`;

export const WebsiteContainer = styled.div `
  width: 100%;
  max-width: 400px;
  a {
    color: ${props => props.fc};
    text-transform: uppercase;
  }

  img {
    width: 80%
  }

  @media screen and (min-width: 450px) {
    display: flex;
    flex-direction: row;

    width: 60%;
    a {
      color: ${
        props => props.fc
      };
      text-transform: uppercase;
    }

    img {
      width: 80%
    }

  }

`