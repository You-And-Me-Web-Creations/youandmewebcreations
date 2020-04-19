import React from "react";

import { ColoredDivContainer, DivText, WebsiteContainer } from "./coloreddiv.styles";

const ColoredDiv = ({ bg, fc, text, go_to, rotation, website }) => {
  // const images = require.context("../assets", true);
  // let imgsrc = '';
  // if (imageUrl) {
  //   imgsrc = images(`./${imageUrl}`);
  // }

  return (
    <ColoredDivContainer bg={bg} rotation={rotation}>
    {website ? <WebsiteContainer>
    {website}
    </WebsiteContainer> : null}
      <DivText fc={fc}>
        {text}
        {go_to}
      </DivText>
    </ColoredDivContainer>
  );
};

export default ColoredDiv;
