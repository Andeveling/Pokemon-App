import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CreatePokemonButton from "../../components/CreatePokemonButton/CreatePokemonButton";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <CreatePokemonButton></CreatePokemonButton>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
