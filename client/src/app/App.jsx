import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import LandingPage from "../pages/LandingPage/LandingPage";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import NotFound404 from "../pages/404/NotFound404";
import TestRute from "../pages/TestRute/TestRute";
import CreatePokemon from "../pages/CreatePokemon/CreatePokemon";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route index exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='home/:id' element={<PokeDetail></PokeDetail>}></Route>
        <Route exact path='/createpokemon' element={<CreatePokemon></CreatePokemon>}></Route>
        <Route exact path='/test' element={<TestRute></TestRute>}></Route>

        <Route path='*' element={<NotFound404></NotFound404>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
