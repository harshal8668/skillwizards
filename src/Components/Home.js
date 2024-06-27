import { Link } from "react-router-dom";
import SkillCatalog from "./SkillCatalog";
import React from "react";

function Reasons() {
  return (
    <section className="my-5 container">
      <h2 className="titles">Why SkillWizards</h2>
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
        <h2 className="featured-title">Meet Our Mentors</h2>
        <div className="featured-grid container">
          <div className="featured-item">
            <div className="featured-image">
              <img  src={require("../assets//mentorsImg.png")}  alt="Featured 1"/>
            </div>

          </div>
          <div className="featured-item">
            <div className="featured-image">
              <video style={{width:'100%'}} className="mentorsVideo" autoPlay controls>
                <source  src={""} type="video/mp4" />
              </video>

            </div>
          </div>
        </div>
      </section>

      <SkillCatalog></SkillCatalog>
      <Reasons></Reasons>
    </>
  );
}
