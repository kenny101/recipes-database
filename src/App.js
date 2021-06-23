import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import { useState } from "react";

import * as React from "react";


function App({ Component }) {
  const [recipes, setRecipes] = useState([
    {
      Name: "CREAMY FISH PIE BITES | with fondue | John Quilter",
      Image: "http://img.youtube.com/vi/764xofTyotw/maxresdefault.jpg",
      Source:
        "https://www.youtube.com/watch?v=764xofTyotw&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      Ingredients:
        "ale, bay leaves, bread, cheese, cheese sauce, corn, crab, cream, dill, double cream, fish, flour, fresh dill, garlic, garlic powder, haddock, honey, langoustines, lobster, milk, nutmeg, onions, parsley, pepper, peppercorns, potatoes, prawns, rum, salmon, seaweed, shrimp, vinegar, wine vinegar",
    },
    {
      Name: "TURKEY DIPPERS | RECIPE | COLLAB ERIC LANLARD | John Quilter",
      Image: "http://img.youtube.com/vi/wNiJKlvOrFI/maxresdefault.jpg",
      Source:
        "https://www.youtube.com/watch?v=wNiJKlvOrFI&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      Ingredients:
        "baking powder, beer, chili, curry, fish, flour, garlic, granulated sugar, paprika, rice, sea salt, smoked paprika, turkey, vinegar, white wine, white wine vinegar, wine vinegar",
    },
    {
      Name: "Breakfast Burrito | John Quilter",
      Image: "http://img.youtube.com/vi/53NXw5qdKYc/maxresdefault.jpg",
      Source:
        "https://www.youtube.com/watch?v=53NXw5qdKYc&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      Ingredients:
        "ale, bacon, bread, butter, eggs, flatbread, ham, mushrooms, pepper, potatoes, rice, steak",
    },
  ]);

  const [properties, setProperty] = useState([{
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }]);

  return (
      <Recipes recipes={recipes} onFilter={filterRecipe}/>
  );
}

// Delete recipe
const filterRecipe = (id) =>  {
  console.log('delete', id);
}

const headingStyle = {
  color: "red",
  backgroundColor: "purple",
};

export default App;
