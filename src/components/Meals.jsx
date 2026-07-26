import { useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
      // ... handle errors
    }

    const meals = await response.json();
    setLoadedMeals(meals);
  }

  return <ul id="meals">{loadedMeals}</ul>;
}
