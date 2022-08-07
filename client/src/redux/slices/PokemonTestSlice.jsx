import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//creamos la asyncThunk que nos permite hacer la peticion antes de actualizar el estado
// esta funcion la llamamos desde el componente con un useEffect(()=>{dispacher(axiosPokemons())},[])
export const axiosPokemons = createAsyncThunk(/*  */ "testSlice/axiosPokemonByName", async () => {
  return await axios.get(`http://localhost:3001/pokemons`).then((res) => res.data);

  //dispatch(setPokemons(data));
});
//creamos un EntityAdapter para asignarle un id en cache y orgganizamos la data
const pokemonAdapter = createEntityAdapter({
  selectId: (poke) => poke.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

// //y aca le decimos que nos setee todo

export const testSlice = createSlice({
  name: "testSlice",
  initialState: pokemonAdapter.getInitialState({ loading: false }),
  reducers: {
    setAllPokemonsTest: pokemonAdapter.setAll,
  },
  extraReducers: {
    [axiosPokemons.pending](state) {
      state.loading = true;
    },
    [axiosPokemons.fulfilled](state, { payload }) {
      state.loading = false;
      pokemonAdapter.setAll(state, payload);
    },
    [axiosPokemons.rejected](state) {
      state.loading = false;
      //state.err;
    },
  },
});

//Selectores entidad
export const pokemonSelectors = pokemonAdapter.getSelectors((state) => state.testSlice);
//export const { selectId, selectById, selectTotal, selectEntities, selectAll } = pokemonSelectors;
//destructuring de los selectores
export default testSlice.reducer;
