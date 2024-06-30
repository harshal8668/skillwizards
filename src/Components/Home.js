import { Link } from "react-router-dom";
import SkillCatalog from "./SkillCatalog";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import {Autoplay, EffectCards } from 'swiper/modules';

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
          <p>Affordable</p>
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
        <Swiper
        effect={'cards'}
        grabCursor={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src="/vite.svg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

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
              <video className="mentorsVideo" controls autoPlay muted>
                <source  src={require('../assets/video.mp4')} type="video/mp4" />
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
