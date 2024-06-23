import React from "react";
import { Link } from "react-router-dom";

export default function CourseContent(props) {
  const result = props.contents.map((content, index) => (
    // <li key={index}>{content}</li>
    <div  key={index} class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button  class="accordion-button"  type="button"  data-bs-toggle="collapse"  data-bs-target={"#"+index}  aria-expanded="true"  aria-controls={index}>
          {content}
          </button>
        </h2>

        <div
          id={index}
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Description
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
    <nav className="back">
      <div className="container py-3">
        <Link to='/courses' className="links" style={{color:'white'}}>All Courses</Link> - 
        <Link className="links" style={{color:'white'}} to={props.courseLink}> {props.course} </Link>- {props.title}</div>
    </nav>

    <div className="container courseContent">
      <h3>{props.title}</h3>
      <div>
        <img src={props.imgLink} alt="Img" />
        <span>
          <h4>About Course</h4>
          <p>{props.description}</p>

          <div className="d-flex">
          <span ><img src={require('../assets/clock.png')}  style={{width:'30px'}} alt="" />60 min per class</span>
          <span ><img src={require('../assets/lecture.png')} style={{width:'30px'}}  alt="" />{props.lectureCount} Lectures</span>
          </div>
        </span>
      </div>
    </div>
    <div className="container">
    <h5>Course Structure</h5>
    {result}
    </div>
    </>
  );
}
