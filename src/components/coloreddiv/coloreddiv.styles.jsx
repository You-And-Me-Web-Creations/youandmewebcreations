import styled from "styled-components";

export const ColoredDivContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.bg};
  padding: 3rem;
  margin: 1rem auto 0 auto;
  color: ${props => props.fc};
  transform: ${props => props.rotation};
`;

export const DivText = styled.h3`
  color: ${props => props.fc};

  a {
    color: ${props => props.fc};
    text-transform: uppercase;
  }
`;
