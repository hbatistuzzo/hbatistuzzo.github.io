import React from "react";
// import { stackList } from "../../data/ProjectData";
import { techStack } from "../../data/ProjectData"; // import your data structure


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
              <p>Hello! My name is <strong>Henrique Batistuzzo</strong>, and I'm a Data Analyst with a background in Oceanography. My journey through data science led me to React, and I decided to create this portfolio to showcase my work. Here’s a little more about me:</p>
              <ul>
                <li>🔹 Exchange period at the University of Victoria as a CNPq scholarship holder through the Science Without Borders program.</li>
                <li>🔹 Academic background with a focus on the use of remote sensing to study <em>Geophysical Fluid Dynamics</em>.</li>
                <li>🔹 Years of experience with metocean data (altimetry, SST, salinity, ocean colour, wind) and oceanographic instrumentation (ice profiling sonars, acoustic zooplankton and fish profilers, CTDs, etc.).</li>
                <li>🔹 Experience with numerical models for global oceanic circulation (e.g., ROMS, HYCOM), using them in conjunction with <a href="https://oceanparcels.org/" target="_blank" rel="noopener noreferrer">Parcels</a> to study Lagrangian advection.</li>
              </ul>
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              <p>After completing Ironhack’s 9-week Data Analytics bootcamp, I transitioned into data analysis. I’ve gained proficiency in SQL (MySQL/PostgreSQL), ETL, pipelines, Tableau, Power BI, web scraping, data mining with APIs, and machine learning. My Python toolkit now includes libraries like <strong>Pandas</strong>, <strong>Matplotlib</strong>, <strong>Numpy</strong>, <strong>Scikit-learn</strong>, <strong>SciPy</strong>, <strong>NetCDF</strong>, <strong>Xarray</strong>, <strong>BeautifulSoup</strong>, <strong>Selenium</strong>, <strong>Dask</strong>, and <strong>SQLAlchemy</strong>.</p>
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              <p>I currently work as an <strong>Oceanographic Data Analyst</strong> at the Brazilian Navy-DHN, where I apply my skills to real-world projects. I'm also building my portfolio in Data Science, Data Analysis, and Data Engineering. In addition, I’ve worked as a Teaching Assistant and Specialist Instructor in BC, Canada. I love improving my coding skills, and in my free time, you'll find me on leetcode and <a href="https://www.codewars.com/users/hbatistuzzo" target="_blank" rel="noopener noreferrer" >Codewars</a>, where I proudly hold a 4th kyu rank.</p>
            </ScrollAnimation>
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <p>My journey into programming began with <strong>C</strong>, <strong>Matlab</strong>, and <strong>R</strong>, and today, I use <strong>Python</strong> daily for both oceanography and data science projects. Recently, I’ve also been exploring <strong>NoSQL</strong> databases, particularly <strong>MongoDB</strong>, to expand my database management experience.</p>
            </ScrollAnimation>
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            <p>Here's a breakdown of what technologies I'm currently learning, the ones I'm confident with and the ones that I'm acquainted with:</p>
            </ScrollAnimation>

            {/* Technologies section */}
            <div className="Technologies">
              {techStack.map((category, index) => (
                <div key={index}>
                  <h2 align="center">{category.category}</h2>
                  <div className="tech-container" align="center">
                    {category.technologies.map((tech, idx) => (
                      <ScrollAnimation animateIn="fadeInLeft" key={idx}>
                        <Tech key={idx} className="tech">
                          <TechImg src={tech.img} alt={tech.name} />
                          <TechName>{tech.name}</TechName>
                        </Tech>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
