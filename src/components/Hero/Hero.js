import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Henrique.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    3000,
                    'Welcome to my portfolio!',
                    3000,
                    "I've learned some React and figured I'd put it to good use.",
                    3000,
                    "I'm a Physical Oceanographer and a Data Analyst",
                    3000,
                    'Working towards Data Science and Data Engineering',
                    3000,
                    "You can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    // 1000,
                    // "Seriously, my projects are really cool, go check them out!",
                    // 1000,
                    // "You're uh...",
                    // 1000,
                    // "You're uh... still here?",
                    // 1000,
                    // "Ok, this has been fun, but I'm gonna restart the loop now...",
                    // 1000,
                    // "Or...",
                    // 1000,
                    // "Or... I could scroll you by force! Muahaha!",
                    1000,
                    "See ya!",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/h.png"
                alt="henry"
                style={{ width: '400px', height: 'auto' }}  // Inline styling
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
