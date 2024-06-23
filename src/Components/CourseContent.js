import React from "react";
import { Link } from "react-router-dom";

export default function CourseContent(props) {
  const result = props.contents.map((content, index) => (

    <div  key={index} className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button  className="accordion-button"  type="button"  data-bs-toggle="collapse"  data-bs-target={"#"+index}  aria-expanded="true"  aria-controls={index}>
          {content}
          </button>
        </h2>

        <div
          id={index}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
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
        <Link to='/courses' className="links" style={{color:'white'}}>All Courses</Link> 
        <i className="bi bi-caret-right-fill"><Link className="links" style={{color:'white'}} to={props.courseLink}> {props.course} </Link></i>
        <i className="bi bi-caret-right-fill">{props.title}</i>
      </div>
    </nav>

    <div className="container courseContent">
      <h3 className="my-3">{props.title}</h3>
      <div>
        <img src={props.imgLink} alt="Img" />
        <span>
          <h4 className="my-3">About Course</h4>
          <p>{props.description}</p>

          <div className="d-flex">
          <span ><img src={require('../assets/lecture.png')} style={{width:'30px'}}  alt="" />{props.lectureCount} Lectures</span>
          <span ><img src={require('../assets/clock.png')}  style={{width:'30px'}} alt="" />60 Min / class</span>
          </div>
        </span>
      </div>
    </div>

    <div className="container pb-3 mt-4">
    <h5>Course Structure</h5>
    {result}
    </div>
    
    </>
  );
}
