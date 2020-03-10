import React from "react";

import { ColoredDivContainer, DivText } from "./coloreddiv.styles";

const ColoredDiv = ({ bg, fc, text, go_to, rotation }) => {
  return (
    <ColoredDivContainer bg={bg} rotation={rotation}>
      <DivText fc={fc}>
        {text}
        {go_to}
      </DivText>
    </ColoredDivContainer>
  );
};

export default ColoredDiv;
