import React from "react";

function TagLine() {
  return (
    
    <section style={{backgroundColor:'beige'}} >
      <div className="TagLineSection">
      <div>
        <h2> Unleashing Skills</h2>
        <h2> Creating Wizards</h2>
      </div>
      <img
        className="aboutLogoImg"
        src={require("../assets/Logo.jpg")}
        alt="Logo"
      />
      </div>
    </section>
  );
}

function AboutSections(props) {
  return (
    <div className="my-5 container">
      <h2 className="titles">{props.title}</h2>
      <div className={props.className}>
        <p style={{ textAlign: "justify" }}>{props.content}</p>
        <img className="sectionImg" src={props.sectionImgSrc} alt="" />
      </div>
    </div>
  );
}

function Mentors(props){
return(
  <div>
      <img className="mentorsImg" src={props.imgSrc} alt="mentors"/>
      <p style={{textDecoration:'underline',textUnderlineOffset:'3px'}}>{props.name}</p>
      <p>{props.designation}</p>
      <p>{props.organization}</p>
  </div>
);
}

export default function About() {
  const { about, vision, mission } = require('../data');
  return (
    <>
      <TagLine></TagLine>
      <AboutSections
        className="whoSection"
        sectionImgSrc={require("../assets/who.jpeg")}
        content={about}
        title="WHO WE ARE?"
      ></AboutSections>
      <AboutSections
        className="visionSection"
        sectionImgSrc={require("../assets/vision.jpeg")}
        content={vision}
        title="OUR VISION"
      ></AboutSections>
      <AboutSections
        className="missionSection"
        sectionImgSrc={require("../assets/mission.jpeg")}
        content={mission}
        title="OUR MISSION"
      ></AboutSections>

      <h2 className="titles">OUR MENTORS</h2>
      <section className="mentorsContainer">
        <Mentors
          imgSrc={require("../assets/lalitSir.jpeg")}
          name="Dr. L. B. Damahe"
          designation="Head of Department"
          organization="Professor"
        ></Mentors>

        <Mentors
          imgSrc={require("../assets/bhoyarSir.jpeg")}
          name="Dr. Kishor Bhoyar"
          designation="Assistant Head of Department"
          organization="CSE,YCCE"
        ></Mentors>

        <Mentors
          imgSrc={require("../assets/fazilSir.jpeg")}
          name="Prof. Fazil Sheikh"
          designation="Professor"
          organization="CSE,YCCE"
        ></Mentors>

      </section>

      <h2 className="titles mt-5">MEET OUR MENTORS</h2>
        <video className="mentorsVideo mentorsContainer"  controls>
          <source src={''} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </>
  );
}
