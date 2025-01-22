import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="">
      <nav>
        <ul>
          <li>
            <Link
              to="/AboutMe"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              to="/Portofolio"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              Portofolio
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navigation;
