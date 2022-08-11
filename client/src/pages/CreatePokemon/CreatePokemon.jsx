import React from "react";
import { CreateForm } from "./CreateForm";
import "./CreatePokemon.css";

function CreatePokemon() {
  //console.log(!/^[a-zA-Z]+$/.test("andres"));

  return (
    <div className='form__container'>
      <h1>Create a Pokemon</h1>
      <CreateForm></CreateForm>
    </div>
  );
}

export default CreatePokemon;
