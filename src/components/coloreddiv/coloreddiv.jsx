import React from "react";

import { ColoredDivContainer, DivText } from "./coloreddiv.styles";

const ColoredDiv = ({ bg, fc, text, rotation }) => {
  return (
    <ColoredDivContainer bg={bg} rotation={rotation}>
      <DivText fc={fc}>{text}</DivText>
    </ColoredDivContainer>
  );
};

export default ColoredDiv;
