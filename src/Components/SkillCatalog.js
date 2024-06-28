import React from "react";
import { Link } from "react-router-dom";

export default function SkillCatalog(props) {
  return (
    <section id="skill" className="my-5 container">
      <h2 className="my-5 subHeadings">Skills Catalog</h2>
      <div className="catalog container">
        {props.courses.map((course) => (
          <div key={course.title}>
            <span>
              <img  className="me-2"  src={course.iconImg}  width={40}  height={40}  alt=""/>
              <h6>{course.title}</h6>
            </span>
            <ul className="ms-3">
              {
                course.modules.map((mod)=>(
                  <Link key={mod.name} className="links" to={mod.pathlink}>
                  <li>{mod.name}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
