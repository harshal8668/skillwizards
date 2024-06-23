import React from "react";
import { Link } from "react-router-dom";

export default function CourseContent(props) {
  const result = props.contents.map((content, index) => (
    <li key={index}>{content}</li>
  ));
  return (
    <>
    <nav className="back">
      <div className="container py-3">
        <Link to='/courses' className="links" style={{color:'white'}}>All Courses</Link> - 
        <Link className="links" style={{color:'white'}} to={props.courseLink}> {props.course} </Link>- {props.title}</div>
    </nav>

    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.imgLink} alt="Img" width={200} />
      <h4>About Course</h4>
      <p>{props.description}</p>
      <h5>Course Structure</h5>
      <span>{props.lectureCount} Lectures</span>
      <span>60 min per class</span>
      <ul>{result}</ul>
    </div>
    </>
  );
}
