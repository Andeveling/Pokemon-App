import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

function Home() {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
