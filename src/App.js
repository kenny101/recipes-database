import Recipes from "./components/Recipes";
import FrontPage from "./components/FrontPage";
import DrawerMenu from "./components/Drawer";
import Navbar from "./components/Navbar";
import DropdownExampleSearchSelection from "./components/Search";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";



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
      "Name": "Turkey Pakora | John Quilter",
      "Image": "http://img.youtube.com/vi/nZGZSTKpl98/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=nZGZSTKpl98&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "butter, chiles, chili, chili powder, coco, coconut, coriander, cumin, flour, gin, ginger, ground coriander, ground cumin, lemon, lemon zest, masala, methi, sunflower oil, turkey, turkey meat",
    },
  ]);



  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <FrontPage />
      <Recipes recipes={recipes} onFilter={filterRecipe} />
    </>
  );
}

// Delete recipe
const filterRecipe = (id) => {
  console.log('delete', id);
}

const headingStyle = {
  color: "red",
  backgroundColor: "purple",
};

export default App;
