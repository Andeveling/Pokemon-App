import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import LandingPage from "../pages/LandingPage/LandingPage";
import Home from "../pages/Home/Home";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import Create from "../pages/Create/Create";
import NotFound404 from "../pages/404/NotFound404";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route index exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='home/:id' element={<PokeDetail></PokeDetail>}></Route>
        <Route exact path='home/addpokemon' element={<Create></Create>}></Route>

        <Route path='*' element={<NotFound404></NotFound404>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
