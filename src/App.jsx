import "./App.css";
import React from "react";
import Recipe from "./Recipe";
import recipeData from "./recipeData";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Recipe data={recipeData} />
    </div>
  );
};

export default App;
