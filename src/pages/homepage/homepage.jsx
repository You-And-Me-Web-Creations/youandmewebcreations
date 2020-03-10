import React, { Profiler } from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer background="palletGreen">
      <Profiler
        id="home"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <ColoredDiv
          bg={({ theme }) => theme.palletGreen}
          fc={({ theme }) => theme.palletPurple}
          text="My name is Diane Leigh, and I am a freelance web developer/designer,
            located in Leavittsburg Ohio. I have been designing and developing
            websites for 4 years. Because, after 30+ years in medical research I wanted the freedom and flexibility to enjoy my granddaugter and her
            numerous activities."
          rotation="rotate(-10deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletOrange}
          fc={({ theme }) => theme.palletBlue}
          text="I have created everything from simple single page websites to multipage progressive web apps using cloud storage, complex forms for retrieving data from end-users and checkout pages for ecommerce. I can integrate your calendar and incorporate a schedualing componet."
          rotation="rotate(5deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletBlue}
          fc={({ theme }) => theme.palletGreen}
          text="My favorite part of freelance web design is figuring out how to put the pieces together in unique and refreshing ways. We can work from your vision, or mine, in the end I want you to have the website of your dreams."
          rotation="rotate(-5deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletPurple}
          fc={({ theme }) => theme.palletOrangeFont}
          text="This is going to be an email contact form!"
          rotation="rotate(10deg)"
        ></ColoredDiv>
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;