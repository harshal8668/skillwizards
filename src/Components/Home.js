import { Link } from "react-router-dom";
import SkillCatalog from "./SkillCatalog";
import React from 'react';
import About from './About'

function Reasons(){
return(
    <section className="my-5 container">
        <h2 className="titles">Why SkillWizards</h2>
      <div className="container reasonsContainer">
        <div>
          <img  src={require('../assets/physical.png')} className="mentorsImg" alt="Physical" />
          <p>Physical Learning</p>
        </div>
        <div>
          <img src={require('../assets/quality.png')} className="mentorsImg" alt="Quality" />
          <p>Quality Learning</p>
        </div>
        <div>
          <img src={require('../assets/pocket.png')} className="mentorsImg" alt="Evaluation" />
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
          <h1 className="heading">Find Your<br/>Niche</h1>
          <Link to="/courses" className="links"><button className="btn-5"><i className="bi bi-arrow-up-right-circle-fill pe-1"></i><span>Explore Courses</span></button></Link>
        </div>
        
      </section>
      <About></About>
      <SkillCatalog></SkillCatalog>
      <Reasons></Reasons>
    </>
  );
}

