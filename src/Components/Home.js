import { Link } from "react-router-dom";
import SkillCatalog from "./SkillCatalog";
import React from "react";

function Reasons() {
  return (
    <section className="my-5 container">
      <h2 className="subHeadings mb-5">Why SkillWizards</h2>
      <div className="container reasonsContainer">
        <div>
          <img
            src={require("../assets/physical.png")}
            className="mentorsImg"
            alt="Physical"
          />
          <p>Physical Learning</p>
        </div>
        <div>
          <img 
            src={require("../assets/quality.png")}
            className="mentorsImg"
            alt="Quality"
          />
          <p>Quality Learning</p>
        </div>
        <div>
          <img
            src={require("../assets/curriculum.png")}
            className="mentorsImg"
            alt="Evaluation"
          />
          <p>Advanced Curriculum</p>
        </div>
        <div>
          <img 
            src={require("../assets/tutor.png")}
            className="mentorsImg"
            alt="Evaluation"
          />
          <p>Experienced Tutor</p>
        </div>
        <div>
          <img
            src={require("../assets/pocket.png")}
            className="mentorsImg"
            alt="Evaluation"
          />
          <p>Pocket Friendly</p>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  const { courses} = require('../data');
  return (
    <>
      <section className="nicheSection">
        <div className="container">
          <h1 className="heading">
            Find Your
            <br />
            Niche
          </h1>
          <Link to="/courses" className="links">
            <button className="btn-5">
              <i className="bi bi-arrow-up-right-circle-fill pe-1"></i>
              <span>Explore Courses</span>
            </button>
          </Link>
        </div>
      </section>

      <section className=" featured-section py-5">
        <h2 className=" mb-5 subHeadings">Meet Our Mentors</h2>
        <div className="featured-grid container">
          <div className="featured-item">
            <div className="featured-image">
              <img  src={require("../assets//mentorsImg.png")}  alt="Img"/>
            </div>
 
          </div>
          <div className="featured-item video">
            <div className="featured-image">
              <video className="mentorsVideo" controls>
                <source  src={""} type="video/mp4" />
              </video>

            </div>
          </div>
        </div>
      </section>



      <SkillCatalog courses={courses}></SkillCatalog>
      <Reasons></Reasons>
    </>
  );
}
