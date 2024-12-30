import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/h2.png"
            alt="henry2"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Henrique Batistuzzo</strong>. I'm a Data Analyst with a background in Oceanography. My journey through data science bumped into React, so I've figured I might as well make a portfolio with it.
            <ul>
            <li>- Exchange period at the University of Victoria as a CNPq scholarship holder through the Science Without Borders program.</li>
            <li>- Academic background with a focus on the use of remote sensing to study Geophysical Fluid        Dynamics.</li>
            <li>- Years of experience with metocean data (altimetry, SST, salinity, ocean colour, wind) and         oceanographic instrumentation (ice profiling sonars, acoustic zooplankton and fish profilers, CTD's         etc).</li>
            <li>- Experience with numerical models for global oceanic circulation (e.g. ROMS, HYCOM), using it        together with Parcels (https://oceanparcels.org/) to study lagrangian advection.</li>
            </ul>.

            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            <ul>
            <li>🔹🌊 I have an Ocean/Environmental Sciences academic background; BSc in Oceanography from the University of São Paulo</li>
            <li>🔹⚓: Currently working at the Brazilian Navy-DHN as an oceanographic data analyst</li>
            <li>🔹🖥️ Completed a bootcamp in Data Analytics through Ironhack</li>
            <li>🔹📊 I've worked as a TA/Specialist Instructor and as an Oceanographic Data Analyst in BC, Canada</li>
            <li>🔹🤘 4th kyu in codewars. It ain't easy 😢!</li>
            <li>🔹Currently tackling React and React Native while brushing up javascript</li>
            </ul>


            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
