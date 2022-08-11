import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pokemon.png";
import teamPokemon from "../../assets/landing.png";
import { AiOutlineRight } from "react-icons/ai";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='landing__container'>
      <img className='landing__logo' src={logo} alt='Pokemon Logo'></img>
      <img className='landing__teamPoke' src={teamPokemon} alt='Pokemon Landing'></img>
      <Link to={"/home"}>
        <button className='landing__button'>
          Lets Go to Pokemon App <AiOutlineRight></AiOutlineRight>
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
