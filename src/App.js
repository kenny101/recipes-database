import Recipes from "./components/Recipes";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";



import * as React from "react";


function App({ Component }) {
  const [recipes, setRecipes] = useState([
    {
      "Name": "CREAMY FISH PIE BITES | with fondue | John Quilter",
      "Image": "http://img.youtube.com/vi/764xofTyotw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=764xofTyotw&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "ale, bay leaves, bread, cheese, cheese sauce, corn, crab, cream, dill, double cream, fish, flour, fresh dill, garlic, garlic powder, haddock, honey, langoustines, lobster, milk, nutmeg, onions, parsley, pepper, peppercorns, potatoes, prawns, rum, salmon, seaweed, shrimp, vinegar, wine vinegar",

    },
    {
      "Name": "TURKEY DIPPERS | RECIPE | COLLAB ERIC LANLARD | John Quilter",
      "Image": "http://img.youtube.com/vi/wNiJKlvOrFI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=wNiJKlvOrFI&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "baking powder, beer, chili, curry, fish, flour, garlic, granulated sugar, paprika, rice, sea salt, smoked paprika, turkey, vinegar, white wine, white wine vinegar, wine vinegar",

    },
    {
      "Name": "Turkey Pakora | John Quilter",
      "Image": "http://img.youtube.com/vi/nZGZSTKpl98/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=nZGZSTKpl98&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "butter, chiles, chili, chili powder, coco, coconut, coriander, cumin, flour, gin, ginger, ground coriander, ground cumin, lemon, lemon zest, masala, methi, sunflower oil, turkey, turkey meat",

    },
    {
      "Name": "Beef Nachos | Brisket | John Quilter",
      "Image": "http://img.youtube.com/vi/DzntLSeNzt8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=DzntLSeNzt8&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "bacon, beef, beef brisket, beef stock, brisket, celery, cheese, chili, cinnamon, coffee, corn, corn tortillas, cream, cumin, garlic, masala, molasses, olive oil, onions, paprika, rice, rum, salsa, smoked bacon, sour cream, tortillas",

    },
    {
      "Name": "Duck Burger | John Quilter",
      "Image": "http://img.youtube.com/vi/x8tO_GvIo4k/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=x8tO_GvIo4k&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "burger buns, cake, coriander, dark soy, duck, egg yolks, eggs, garlic, gin, ginger, ground ginger, ham, hamburger, honey, lemon, mustard, mustard seeds, pectin, rapeseed oil, rice, rice wine, sesame, sesame oil, sesame seeds, shallots, toasted sesame oil, toasted sesame seeds, vegetable oil, vinegar, wine vinegar",

    },
    {
      "Name": "Homemade Beans on Toast Recipe with Bacon | John Quilter",
      "Image": "http://img.youtube.com/vi/Vd91Z8su5to/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=Vd91Z8su5to&list=PL6tScHkhWPyntJSK8g8NCy7Rluw4XD0kz&t=0s",
      "Ingredients": "English mustard, bacon, baked beans, brown sugar, cheese, chili, chipotle, coffee, coffee beans, garlic, gin, herbs, molasses, mustard, mustard powder, olive oil, shallots",

    },
    {
      "Name": "Meatless Tacos 5 Ways With Rachel • Tasty",
      "Image": "http://img.youtube.com/vi/ioIWgvvfcAU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=VE-OOeJqiQE&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bananas, beef, bread, cauliflower, cumin, ground beef, jack, jackfruit, methi, mushrooms, pork, soy sauce, tempeh, tofu",
      
    },
    {
      "Name": "Asian Americans Make Asian Dishes For The First Time • Tasty",
      "Image": "http://img.youtube.com/vi/ZHVC-QMp6bU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ZHVC-QMp6bU&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "beef, beef shank, boiled eggs, chicken, eggs, gin, ginger, methi, noodles, rice, salami, scallions, soup",

    },
    {
      "Name": "I Made A Romantic Dinner In 15 Minutes • Tasty",
      "Image": "http://img.youtube.com/vi/esc3xBBn9ic/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=esc3xBBn9ic&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "baking powder, balsamic vinegar, basil, butter, cake, cheese, chicken, chives, chocolate, coco, cocoa, cocoa powder, cola, cream, cream cheese, crust, dry white wine, flour, fresh mint, fresh mozzarella, garlic, gin, granulated sugar, herbs, ice cream, lobster, methi, milk, mint, olive oil, orzo, pasta, pepper, rice, scallops, spinach, truffles, veggies, vinegar, virgin olive oil, white wine",

    },
    {
      "Name": "I Made Grilled Cheese Sandwiches Using 11 Hacks In A Row • Tasty",
      "Image": "http://img.youtube.com/vi/0AbOS_v6_T4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=0AbOS_v6_T4&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bread, brown butter, browning, butter, cheese, cookies, crust, dough, eggs, garlic, honey, methi, sandwiches, sourdough, sourdough bread, tripe, uni",

    },
    {
      "Name": "How To Make 3 Different Recipes With Kimchi • Tasty",
      "Image": "http://img.youtube.com/vi/63nD0oPjQTo/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=63nD0oPjQTo&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "American cheese, bacon, bacon fat, bread, butter, cake, cheddar cheese, cheese, cream, eggs, garlic, gin, heavy cream, kimchi, methi, noodles, olive oil, pasta, rendered bacon fat, rice, scallions, shallots, sharp cheddar cheese, soften, spaghetti, spam",

    },
    {
      "Name": "How To BBQ on a Stove Top Grill • Tasty",
      "Image": "http://img.youtube.com/vi/pqMRaMdXQVo/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=pqMRaMdXQVo&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "Up, america, beer, bell pepper, berries, broccoli, broccolini, brown sugar, butter, chicken, chipotle, chocolate, cola, corn, cumin, feet, garlic, garlic powder, ketchup, lemon, lemon pepper, liquid smoke, methi, olive oil, onion powder, paprika, parsley, pepper, potatoes, raspberries, smoked paprika, sweet corn,",

    },
    {
      "Name": "How To Make A 3-Course Meal In One Pan • Tasty",
      "Image": "http://img.youtube.com/vi/dthjauMsbRw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=dthjauMsbRw&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bacon, bacon grease, basil, cheese, chocolate, cola, corn, crackers, cream, cream cheese, crush, crust, dough, eggs, flour, fresh basil, fresh mozzarella, graham crackers, ham, jalape, marshmallows, methi, milk, milk chocolate, mint, mozzarella cheese, pastry, pepper, pepperoni, pesto, pie crust, pizza sauce, pork, puff pastry, soup, whipped cream",

    },
    {
      "Name": "We Tried Cooking With Our Moms On Zoom • Tasty",
      "Image": "http://img.youtube.com/vi/iZVxXpz73KM/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=iZVxXpz73KM&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "ale, bok choy, butter, carrots, cheese, chicken, corn, corn starch, dill, flour, gin, ginger, ham, methi, mustard, onions, panko, parsley, potatoes, rice, rum, sage, sausages, spinach, starch, veal, veggies",

    },
    {
      "Name": "One-Pot. Kid Friendly. Mom Approved: Hamburger Helper From Scratch • Tasty",
      "Image": "http://img.youtube.com/vi/SwWFhzgXgsk/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=SwWFhzgXgsk&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bacon, beef, beef stock, bell pepper, carrots, cheese, chicken, cream, garlic, ground beef, ham, hamburger, herbs, methi, milk, noodles, onions, paprika, parsley, pasta, pepper, red bell pepper, rice, smoked paprika, soften, starch, thyme, tomato paste, tomatoes, veggies, whole milk",

    },
    {
      "Name": "I Made Fried Chicken And Waffles With Leftover Sourdough Starter • Tasty",
      "Image": "http://img.youtube.com/vi/a_TwEAo9RuU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=a_TwEAo9RuU&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "all-purpose flour, baking powder, bread, butter, buttermilk, chicken, chicken thighs, dough, eggs, flour, garlic, garlic powder, juice, lemon, lemon juice, methi, milk, onion powder, pepper, sourdough, sourdough bread, whole milk, yeast",

    },
    {
      "Name": "Can This Chef Make Tater Tots Fancy? • Tasty",
      "Image": "http://img.youtube.com/vi/NWttynGJIHI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=NWttynGJIHI&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "beef, beef stock, butter, chicken, cream, egg yolks, eggs, flour, garlic, gravy, ground beef, heavy cream, ice cream, melted butter, methi, mushrooms, olive oil, onions, pepper, potatoes, pudding, red wine, rice, rosemary, shiitake, soften, tater tots, thyme,",

    },
    {
      "Name": "I Made 3 Meals With 1 Can Of Spam •xa0Tasty",
      "Image": "http://img.youtube.com/vi/nzf2FCMHBJ8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=nzf2FCMHBJ8&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bread, carrots, fried rice, frozen peas, garlic, gin, ginger, lettuce, nori, oats, onions, peas, rice, soften, soy sauce, spam, starch, vinegar",

    },
    {
      "Name": "Can This Chef Create A Recipe From My Pantry & Fridge? • Tasty",
      "Image": "http://img.youtube.com/vi/6ibZezGV0Kc/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=6ibZezGV0Kc&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "asparagus, black beans, broccoli, brown rice, cilantro, coco, coconut, coconut milk, cola, corn, cream, curry, curry paste, fresh green bean, fried rice, frozen broccoli, frozen corn, garlic, gin, ginger, green beans, lettuce, methi, milk, noodles, olive oil, onions, pasta, penne, penne pasta, pepper, pesto, rice, rice noodles, spaghetti, tofu,",

    },
    {
      "Name": "3-Minute Vs. 30-Minute Vs. 3-Hour Curry •xa0Tasty",
      "Image": "http://img.youtube.com/vi/ChLHWoXitQU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ChLHWoXitQU&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bay leaf, beef, black pepper, black peppercorns, bread, butter, cardamom, cayenne, chicken, chickpeas, chili, chili powder, cilantro, cinnamon, coco, coconut, coconut cream, coconut milk, coconut oil, coriander, coriander powder, corn, cream, cubed beef, cumin, curry, curry leaves, curry powder, curry sauce, dough, fennel, fenugreek, fenugreek leaves, fish, flatbread, flour, fresh cilantro, garlic, garlic powder, gin, ginger, juice, lime, lime juice, masala, methi, milk, minced garlic, minced ginger, mustard, mustard seeds, onion powder, onions, peas, pepper, peppercorns, red pepper, rice, roti, sea salt, soften, soup, spinach, steamed rice, tamarind, tamarind paste, tomatoes, wheat, wheat flour, whole wheat flour",

    },
    {
      "Name": "Which Quarantine Recipe Do You Want To Make? • Tasty",
      "Image": "http://img.youtube.com/vi/VCDwb5cqQ_E/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=VCDwb5cqQ_E&list=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc&t=0s",
      "Ingredients": "bacon, bacon bits, bacon fat, biscuits, black pepper, butter, cake, cake mix, carrots, cauliflower, cheese, chicken, coke, cream, egg whites, eggs, flour, garlic, ice cream, methi, milk, pancake mix, pasta, peas, pepper, potatoes, ramen, roux, shells, soften, veggies, vinegar, white vinegar, white wine, white wine vinegar, wine vinegar, zucchini",

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
