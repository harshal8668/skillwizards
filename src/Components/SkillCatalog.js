import React from "react";
import { Link } from "react-router-dom";

function SubCatalog({ subjects, iconPath, title }) {
  const result = subjects.map((obj) => (
    <Link key={obj.title} className="links" to={obj.link}>
      <li>{obj.title}</li>
    </Link>
  ));
  return (
    <div>
      <span>
        <img className="me-2" src={iconPath} width={40} height={40} alt="" />
        <h6>{title}</h6>
      </span>
      <ul className="ms-3">{result}</ul>
    </div>
  );
}

export default function SkillCatalog() {
  return (
    <section id="skill" className="my-5 container">
      <h2 className="titles my-5">Skills Catalog</h2>
      <div className="catalog container">
        <SubCatalog
          subjects={[
            { title: "C Programming", link: "/cprogramming" },
            { title: "CPP Programming", link: "/cpp" },
            { title: "Python Programming", link: "/python" },
            { title: "Java Programming", link: "/java" },
            { title: "JavaScript Programming", link: "/javascript" },
          ]}
          iconPath={require("../assets/programmingLanguage.png")}
          title="Programming Languages"
        ></SubCatalog>

        <SubCatalog
          subjects={[
            { title: "Web Development", link: "/webdevelopment" },
            { title: "App Development", link: "/appdevelopment" },
            { title: "Game Development", link: "/gamedevelopment" },
            { title: "Robotics & IoT", link: "/roboticsiot" },
          ]}
          iconPath={require("../assets/domain.png")}
          title="Domain Specific"
        ></SubCatalog>

        <SubCatalog
          subjects={[
            { title: "French", link: "/french" },
            { title: "German", link: "/german" },
            { title: "Spanish", link: "/spanish" },
            { title: "Japanese", link: "/japanese" },
            { title: "Chinese", link: "/chinese" },
            { title: "Italian", link: "/italian" },
          ]}
          iconPath={require("../assets/world.png")}
          title="World Languages"
        ></SubCatalog>

        <SubCatalog
          subjects={[
            { title: "Personality Development", link: "/" },
            { title: "Communication SKills", link: "/" },
            { title: "Vedic Maths", link: "/" },
            { title: "Abacus", link: "/" },
            { title: "Critical Thinking", link: "/" },
          ]}
          iconPath={require("../assets/lifeskills.png")}
          title="21st Century Skills"
        ></SubCatalog>

        <SubCatalog
          subjects={[
            { title: "Microsoft Office", link: "/" },
            { title: "Canva Designing", link: "/" },
            { title: "Photoshop", link: "/" },
          ]}
          iconPath={require("../assets/generalskill.png")}
          title="General Skills"
        ></SubCatalog>
      </div>
    </section>
  );
}
