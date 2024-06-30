import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavItem(props){
  return (
    <li className="nav-item">
      <Link className={props.className} aria-current="page" to={props.linkTo}>
        {props.title}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [NavState,SetNavState]=useState("open");

  const handleNavBar=()=>{
    if(NavState==="open"){
      SetNavState("close");
      // console.log(NavState)
    }
    else{
      SetNavState("open");
      // console.log(NavState)
    }
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className=" container container-fluid">
        <Link className="navbar-brand my-auto" to="/">
            <img src={require("../assets/Logo.jpg")} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
            <span >SkillWizards</span>
        </Link>

        <button onClick={handleNavBar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {
          
            NavState==="open"?<i className="bi bi-list"></i>:
            <i className="bi bi-x"></i>
          }
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <NavItem className="nav-link" title="Home" linkTo="/"></NavItem>
            <NavItem className="nav-link" title="About" linkTo="/about"></NavItem>
            <li className="nav-item dropdown">
              <a className="nav-link " href="/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Categories<i className="ms-1 bi bi-caret-down-fill align-middle"></i>
              </a>
              <ul className="dropdown-menu">
                <NavItem className="dropdown-item" title="Programming Languages" linkTo="/courses/programming"></NavItem>
                <NavItem className="dropdown-item" title="Domain specific" linkTo="/courses/domainspecific"></NavItem>
                <NavItem className="dropdown-item" title="Foreign Languages" linkTo="/courses/foreignlanguages"></NavItem>
                <li>
                  <Link className="dropdown-item" to="/courses/lifeskill">
                  21<sup>st</sup> Century Skills
                  </Link>
                </li>
                <NavItem className="dropdown-item" title="General Skills" linkTo="/courses/generalskill"></NavItem>
              </ul>
            </li>
            {/* <NavItem className="nav-link" title="Certificate" linkTo="/about"></NavItem> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}
