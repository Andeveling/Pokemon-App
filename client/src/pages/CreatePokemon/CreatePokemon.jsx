import React, { useState } from "react";
import { useGetAllTypesQuery } from "../../services/pokemonApi";
import "./CreatePokemon.css";

function CreatePokemon() {
  const [pokemon, setPokemon] = useState({
    name: "",
    typeOne: "",
    typeTwo: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    imgUrl: "",
  });
  const { currentData, isLoading, isSuccess } = useGetAllTypesQuery();

  const datalist = currentData?.map((type) => {
    return (
      <option key={type.id} value={type.name}>
        {type.name}
      </option>
    );
  });

  const handleInputChange = function (event) {
    event.preventDefault();
    if (event.target.name.value > 1000 || event.target.name.value < 1) {
      console.log("fuera de rango");
    }

    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pokemon);
  };

  return (
    <div>
      <h1>Create a Pokemon</h1>
      <form
        className='form__container'
        onSubmit={(event) => {
          handleSubmit(event);
        }}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='typeOne'>Type One</label>
        <select
          name='typeOne'
          id='typeOne'
          onChange={(event) => {
            handleInputChange(event);
          }}>
          <option value='none'>none</option>
          {datalist}
        </select>

        <label htmlFor='typeTwo'>Type Two</label>
        <select
          name='typeTwo'
          id='typeTwo'
          onChange={(event) => {
            handleInputChange(event);
          }}>
          <option value='none'>none</option>
          {datalist}
        </select>

        <label htmlFor='hp'>Heal</label>
        <input
          type='number'
          id='hp'
          name='hp'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='attack'>Attack</label>
        <input
          type='number'
          id='attack'
          name='attack'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='defense'>Defense</label>
        <input
          type='number'
          id='defense'
          name='defense'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='speed'>Speed</label>
        <input
          type='number'
          id='speed'
          name='speed'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='height'>Height</label>
        <input
          type='number'
          id='height'
          name='height'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='weight'>Weight</label>
        <input
          type='number'
          id='weight'
          name='weight'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <label htmlFor='imgUrl'>Image</label>
        <input
          id='imgUrl'
          name='imgUrl'
          onChange={(event) => {
            handleInputChange(event);
          }}></input>

        <input type='submit'></input>
      </form>
    </div>
  );
}

export default CreatePokemon;
