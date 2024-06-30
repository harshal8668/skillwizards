import React from "react";
import { Link } from "react-router-dom";

export default function CourseContent(props) {
  const result = props.contents.modules.map((content, index) => (
    <li  key={index} className="contentListItem my-1" >
      {content.title}
    </li>
  ));

  return (
    <>
    <nav className="back">
      <div className="container py-3">
        <Link to='/courses' className="links" style={{color:'white'}}>All Courses</Link> 
        <i className="bi bi-caret-right-fill"><Link className="links" style={{color:'white'}} to={props.courseLink}> {props.course} </Link></i>
        <i className="bi bi-caret-right-fill">{props.title}</i>
      </div>
    </nav>

    <div className="container courseContent">
      <h3 className="my-3">{props.title}</h3>
      <div className="courseSubContent">
        <img  src={props.imgLink} alt="Img"/>
        <div>
          <h4 className="my-3">About Course</h4>
          <p>{props.contents.description}</p>

          <div className="courseSchedule">
            <span className="my-2"><img  className="me-2" src={require('../assets/lecture.png')} style={{width:'30px'}}  alt="" />{props.lectureCount} Lectures</span>
            <span className="my-2"><img  className="me-2" src={require('../assets/clock.png')}  style={{width:'30px'}} alt="" />60 Min / class</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container pb-3 mt-4">
    <h5>Course Structure</h5>
    <ul>
    {result}
    </ul>
   
    </div>
    </>
  );
}
