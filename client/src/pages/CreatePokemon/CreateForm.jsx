import React from "react";
import { useForm } from "../../hooks/useForm";
import { useGetAllTypesQuery } from "../../services/pokemonApi";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./CreatePokemon.css";

const initialForm = {
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
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-z]{3,16}$/;
  //Casos para name
  if (!form.name.trim()) {
    errors.name = "Name is require";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "the field can only have letters, between 3 and 16 letters";
  }
  //Casos para HP
  if (!form.hp) {
    errors.hp = "Hp is require";
  } else if (form.hp <= 0 || form.hp > 1000) {
    errors.hp = "statistic must be a number between 1 and 1000";
  }

  if (!form.attack) {
    errors.attack = "Attack is require";
  } else if (form.attack <= 0 || form.attack > 1000) {
    errors.attack = "statistic must be a number between 1 and 1000";
  }

  if (!form.defense) {
    errors.defense = "Defense is require";
  } else if (form.defense <= 0 || form.defense > 1000) {
    errors.defense = "statistic must be a number between 1 and 1000";
  }
  if (!form.speed) {
    errors.speed = "Speed is require";
  } else if (form.speed <= 0 || form.speed > 1000) {
    errors.speed = "statistic must be a number between 1 and 1000";
  }
  if (!form.height) {
    errors.height = "Speed is require";
  } else if (form.height <= 0 || form.height > 1000) {
    errors.height = "statistic must be a number between 1 and 1000";
  }
  if (!form.weight) {
    errors.weight = "Speed is require";
  } else if (form.weight <= 0 || form.weight > 1000) {
    errors.weight = "statistic must be a number between 1 and 1000";
  }
  if (!form.typeOne) {
    errors.typeOne = "Type One is require";
  } else if (form.typeTwo === form.typeOne) {
    errors.typeTwo = "Type Two is not equal to type One";
  }

  return errors;
};

export const CreateForm = () => {
  const [search, setSearch] = useSearchParams("");
  const { currentData, data, isLoading, isSuccess } = useGetAllTypesQuery();
  const datalist = currentData?.map((type) => {
    return (
      <option key={type.id} value={type.name}>
        {type.name}
      </option>
    );
  });

  const { form, errors, loading, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <form onSubmit={handleSubmit} className='form__create'>
      <label className='form__label' htmlFor='name'>
        Name Pokemon
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='create__input'
        placeholder='enter a name of 3-16 characters'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.name}></input>
      {errors.name && <p className='form__error'>{errors.name}</p>}

      <div className='form__types'>
        <div className='form__item'>
          <label className='form__label' htmlFor='typeOne'>
            Type One
          </label>
          <select
            name='typeOne'
            id='typeOne'
            className='create__input create__input-type'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.typeOne}>
            {datalist}
          </select>
        </div>

        <div className='form__item'>
          <label className='form__label' htmlFor='typeTwo'>
            Type Two
          </label>
          <select
            name='typeTwo'
            id='typeTwo'
            className='create__input create__input-type two'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.typeTwo}>
            <option value={null}>null</option>
            {datalist}
          </select>
        </div>
      </div>
      {errors.typeOne && <p className='form__error'>{errors.typeOne}</p>}
      {errors.typeTwo && <p className='form__error'>{errors.typeTwo}</p>}

      <label className='form__label' htmlFor='hp'>
        Heal
      </label>
      <input
        type='number'
        id='hp'
        name='hp'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.hp}></input>
      {errors.hp && <p className='form__error'>{errors.hp}</p>}

      <label className='form__label' htmlFor='attack'>
        Attack
      </label>
      <input
        type='number'
        id='attack'
        name='attack'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.attack}></input>
      {errors.attack && <p className='form__error'>{errors.attack}</p>}

      <label className='form__label' htmlFor='defense'>
        Defense
      </label>
      <input
        type='number'
        id='defense'
        name='defense'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.defense}></input>
      {errors.defense && <p className='form__error'>{errors.defense}</p>}

      <label className='form__label' htmlFor='speed'>
        Speed
      </label>
      <input
        type='number'
        id='speed'
        name='speed'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.speed}></input>
      {errors.speed && <p className='form__error'>{errors.speed}</p>}

      <label className='form__label' htmlFor='height'>
        Height
      </label>
      <input
        type='number'
        id='height'
        name='height'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.height}></input>
      {errors.height && <p className='form__error'>{errors.height}</p>}

      <label className='form__label' htmlFor='weight'>
        Weight
      </label>
      <input
        type='number'
        id='weight'
        name='weight'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.weight}></input>
      {errors.weight && <p className='form__error'>{errors.weight}</p>}

      <label className='form__label' htmlFor='imgUrl'>
        Image Url
      </label>
      <input
        type='text'
        id='imgUrl'
        name='imgUrl'
        className='create__input'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        value={form.imgUrl}></input>
      {errors.imgUrl && <p className='form__error'>{errors.imgUrl}</p>}

      <input type='submit' value={"Create a Pokemon!"} className='form__submit-button' />
    </form>
  );
};
