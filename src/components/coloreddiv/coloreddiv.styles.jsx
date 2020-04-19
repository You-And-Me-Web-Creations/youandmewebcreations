import styled from "styled-components";

export const ColoredDivContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.bg};
  padding: 3rem;
  margin: 1rem auto 0 auto;
  color: ${props => props.fc};
  transform: ${props => props.rotation};
`;

export const DivText = styled.div`
  width: 100%;
  color: ${props => props.fc};

  a {
    color: ${props => props.fc};
    text-transform: uppercase;
  }
`;

export const WebsiteContainer = styled.div`
  width: 60%;
  a {
    color: ${props => props.fc};
    text-transform: uppercase;
  }

  img {
    width: 80%
  }

`
