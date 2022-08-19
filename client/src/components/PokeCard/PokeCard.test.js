import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PokeCard from "./PokeCard";

test("Renders content", () => {
  const component = render(
    <PokeCard
      id={260}
      name={"Swampert"}
      imgUrl={
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
      }
      typeOne={"water"}
      typeTwo={"ground"}></PokeCard>
  );
});

//{ id, name, typeOne, typeTwo, imgUrl }
