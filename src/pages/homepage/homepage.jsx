import React, { Profiler } from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";
import Contact from "../../components/contact/contact";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer background="palletGreen">
      <Profiler
        id="home"
        onRender={(id, phase, actualDuration) => {
          // console.log({ id, phase, actualDuration });
        }}
      >
        <ColoredDiv
          bg={({ theme }) => theme.palletGreen}
          fc={({ theme }) => theme.palletPurple}
          text={
             <div>
              <h3>Hi, </h3>
              <span>My name is Diane Leigh, I am a freelance web developer/designer, located in Leavittsburg Ohio. After 30+ years in medical research I needed freedom and flexibility to enjoy my granddaugter. So, let me help you get your presence known to the world. For more background check out my</span>
            </div>
            }
          go_to={
            <a
              href="https://leighd2008.github.io/My_Profile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Profile Page!
            </a>
          }
          rotation="rotate(-10deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletOrange}
          fc={({ theme }) => theme.palletBlue}
          text="We can create everything from simple single page websites to multipage progressive web apps using cloud storage, complex forms for retrieving data from end-users and checkout pages for ecommerce. We can integrate your calendar and incorporate a schedualing component."
          go_to={
            <a href="Portfolio" rel="noopener noreferrer">
              View my work here!
            </a>
          }
          rotation="rotate(5deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletBlue}
          fc={({ theme }) => theme.palletGreen}
          text="My favorite part of web design is figuring out how to put the pieces together in unique and refreshing ways. We can work from your vision, or mine to create the website of your dreams. So let's get you known to the world"
          rotation="rotate(-5deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletPurple}
          fc={({ theme }) => theme.palletOrangeFont}
          text={
            <div>
              <h1>Let's Talk</h1>
              <Contact />
            </div>
          }
          rotation="rotate(10deg)"
        ></ColoredDiv>
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
