import { useState } from "react";
import { useAddNewPokemonMutation } from "../services/pokemonApi";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
  const [addNewPokemon, { isLoading, isSuccess }] = useAddNewPokemonMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      addNewPokemon(form);
    } else {
      return;
    }
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
