import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { pokemonApi } from "./services/pokemonApi";
import App from "./app/App";
import "./index.css";

store.dispatch(pokemonApi.endpoints.getAllPokemons.initiate());
store.dispatch(pokemonApi.endpoints.getAllTypes.initiate());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
