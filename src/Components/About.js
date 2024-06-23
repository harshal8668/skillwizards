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
  const content1 =
    "Welcome to Skill Wizards, where we are dedicated to shaping the future leaders of tomorrow by equipping them with the essential skills needed to succeed in the 21st century. Our institute provides a dynamic and innovative learning environment that fosters critical thinking, creativity, collaboration, and a passion for lifelong learning. At Skill Wizards, we believe in a holistic approach to education that goes beyond traditional academics. Our curriculum is designed to integrate cutting-edge technology, real-world problem-solving, and community engagement, ensuring our students are well-prepared to navigate and excel in an ever-evolving global landscape. We are more than just an educational institution; we are a community of learners, thinkers, and innovators. Our mission is to cultivate a culture of curiosity, resilience, and empathy, empowering our students to become compassionate global citizens who make a positive impact on the world.";
  const vision =
    "Our vision is to nurture a generation of innovative thinkers and leaders who can adapt and thrive in a rapidly changing world.";
  const mission =
    "Going beyond the traditional academics by providing an inclusive and stimulating educational environment where students develop critical thinking, creativity, and collaborative skills through experiential learning and community engagement. Whole curriculum is designed so their are very less theoretical and more practical based learning which are the most demanding in 21st century.";
  return (
    <>
      <TagLine></TagLine>
      <AboutSections className="whoSection" sectionImgSrc={require('../assets/who.jpeg')} content={content1} title="WHO WE ARE?"></AboutSections>
      <AboutSections className="visionSection" sectionImgSrc={require('../assets/vision.jpeg')} content={vision} title="OUR VISION"></AboutSections>
      <AboutSections className="missionSection" sectionImgSrc={require('../assets/mission.jpeg')} content={mission} title="OUR MISSION"></AboutSections>

      <h2 className="titles">OUR MENTORS</h2>
      <section className="mentorsContainer">
        <Mentors  imgSrc={require('../assets/lalitSir.jpeg')} name="Dr. L. B. Damahe" designation="Head of Department" organization="CSE,YCCE"></Mentors>
        
        <Mentors  imgSrc={require('../assets/bhoyarSir.jpeg')} name="Dr. Kishor Bhoyar" designation="Assistant Head of Department" organization="CSE,YCCE"></Mentors>

        <Mentors  imgSrc={require('../assets/fazilSir.jpeg')} name="Prof. Fazil Sheikh" designation="Professor" organization="CSE,YCCE"></Mentors>
        
        
      </section>
    </>
  );
}
