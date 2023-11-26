import React from "react";
import "./Navbar.css";
import Image from "../../images/q.png";

const Navbar = ({onAdd}) => {
  return (
    <header className="navigation bg-dark">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light  px-0">
          <a className="navbar-brand logo" href="index.html">
            <img src={Image} alt="logo" className="img-fluid logo-default" />  
          </a>
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item ">
                <a class="nav-link" href="#" onClick={onAdd}>
                  Create New Quiz
                </a>
              </li>
            </ul>
       
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
