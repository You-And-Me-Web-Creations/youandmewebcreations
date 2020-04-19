import React from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";
import Contact from "../../components/contact/contact";

const ContactPage = () => {
  return (
    <div>
      <ColoredDiv
        id={'contact'}
        bg={({ theme }) => theme.palletPurple}
        fc={({ theme }) => theme.palletOrangeFont}
        text={
          <div >
            <h1>Let's Talk</h1>
            <Contact />
          </div>
        }
        rotation="rotate(10deg)"
      ></ColoredDiv>
    </div>
  );
};

export default ContactPage;
