import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const courses = props.courses;
  const res = courses.map((course) => (
    <div key={course.title} id={course.id}>
      <h5>{course.title}</h5>
      <div className="d-flex flex-wrap CourseCardContainer mx-auto">
        {course.modules.map((module, index) => (
          <Link key={module.name} to={module.pathlink} className="links">
            <div className="card m-2" style={{ width: "15rem" }}>
              <img
                src={module.imgPath}
                alt="img"
                className="card-img-top"
                height={125}
              />

              <div className="card-body">
                <h5 className="card-title">{module.name}</h5>
                <p className="card-text">Description </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <nav className="back">
        <div className="container py-3">
          <Link to="/courses" className="links " style={{ color: "white" }}>
            All Courses 
          </Link>
          {courses.length===1? <i className="bi bi-caret-right-fill">{courses[0].title}</i> :""}
        </div>
      </nav>


      <section className="container mt-3">
        <h2>What We Offer</h2>
        <div>{res}</div>
      </section>
    </>
  );
}
