import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='landing__container'>
      <h1>Pokemon App</h1>
      <h2>Landing Page</h2>
      <Link to={"/home"}>
        <button className='landing__button'>Lets Go</button>
      </Link>
    </div>
  );
}

export default LandingPage;
