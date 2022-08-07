import React, { Fragment } from "react";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import NotFound404 from "../pages/404/NotFound404";
import TestRute from "../pages/TestRute/TestRute";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route index exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='home/:id' element={<PokeDetail></PokeDetail>}></Route>
        <Route exact path='home/addpokemon' element={<Create></Create>}></Route>
        <Route exact path='/test' element={<TestRute></TestRute>}></Route>

        <Route path='*' element={<NotFound404></NotFound404>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
