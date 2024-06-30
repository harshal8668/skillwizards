import React from "react";

function TagLine() {
  return (
    
      <section className="TagLineSection ">
        <div>
          <h1 className="subHeadings tagline1"> Unleashing Skills</h1>
          <h1 className="subHeadings tagline2"> Creating Wizards</h1>
        </div>
        <img
          className="aboutLogoImg my-3"
          src={require("../assets/Logo.jpg")}
          alt="Logo"
        />
      </section>
    
  );
}

function AboutSections(props) {
  return (
    <div className="my-5 container">
      <h2 className="subHeadings">{props.title}</h2>
      <div className={props.className}>
        <p style={{ textAlign: "justify" ,fontSize:'1.3rem',fontWeight:'400'}}>{props.content}</p>
        <img className="sectionImg" src={props.sectionImgSrc} alt="" />
      </div>
    </div>
  );
}

export function Mentors(props) {
  return (
    <span className={props.className}>
      <img className={props.imgClass} src={props.imgSrc} alt="mentors" />
      <p style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{props.name}</p>
      {props.designation && <p>{props.designation}</p>}
      {props.organization && <p>{props.organization}</p>}
    </span>
  );
}

export default function About() {
  const { about, vision, mission } = require("../data");
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

      <h2 className="subHeadings">OUR MENTORS</h2>
      <section className="mentorsContainer">
        <Mentors
        className="mentorsImgBorder" imgClass="mentorsImg"
          imgSrc={require("../assets/lalitSir.jpeg")}
          name="Dr. L. B. Damahe"
          designation="Head of Department"
          organization="Professor"
        ></Mentors>

        <Mentors className="mentorsImgBorder" imgClass="mentorsImg"
          imgSrc={require("../assets/bhoyarSir.jpeg")}
          name="Dr. Kishor Bhoyar"
          designation="Assistant Head of Department"
          organization="CSE,YCCE"
        ></Mentors>

        <Mentors className="mentorsImgBorder" imgClass="mentorsImg"
          imgSrc={require("../assets/fazilSir.jpeg")}
          name="Prof. Fazil Sheikh"
          designation="Professor"
          organization="CSE,YCCE"
        ></Mentors>
      </section>

    </>
  );
}
