import Recipes from "./components/Recipes";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DropdownExampleClearableMultiple from "./components/Search";
import pkg from 'semantic-ui-react/package.json'
import ReactDOM from "react-dom";
import { Dropdown } from 'semantic-ui-react'

import { Container, Header, List } from "semantic-ui-react";

import * as React from "react";


function App({ Component }) {
  const [recipes, setRecipes] = useState([
    {
      "Name": "CREAMY FISH PIE BITES | with fondue | John Quilter",
      "Image": "http://img.youtube.com/vi/764xofTyotw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=764xofTyotw",
      "Ingredients": "ale, bay leaves, bread, cheese, cheese sauce, corn, crab, cream, dill, double cream, fish, flour, fresh dill, garlic, garlic powder, haddock, honey, langoustines, lobster, milk, nutmeg, onions, parsley, pepper, peppercorns, potatoes, prawns, rum, salmon, seaweed, shrimp, vinegar, wine vinegar",
      "id": 0
    }, {
      "Name": "TURKEY DIPPERS | RECIPE | COLLAB ERIC LANLARD | John Quilter",
      "Image": "http://img.youtube.com/vi/wNiJKlvOrFI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=wNiJKlvOrFI",
      "Ingredients": "baking powder, beer, chili, curry, fish, flour, garlic, granulated sugar, paprika, rice, sea salt, smoked paprika, turkey, vinegar, white wine, white wine vinegar, wine vinegar",
      "id": 1
    }, {
      "Name": "Turkey Pakora | John Quilter",
      "Image": "http://img.youtube.com/vi/nZGZSTKpl98/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=nZGZSTKpl98",
      "Ingredients": "butter, chiles, chili, chili powder, coco, coconut, coriander, cumin, flour, gin, ginger, ground coriander, ground cumin, lemon, lemon zest, masala, methi, sunflower oil, turkey, turkey meat",
      "id": 3
    }, {
      "Name": "Beef Nachos | Brisket | John Quilter",
      "Image": "http://img.youtube.com/vi/DzntLSeNzt8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=DzntLSeNzt8",
      "Ingredients": "bacon, beef, beef brisket, beef stock, brisket, celery, cheese, chili, cinnamon, coffee, corn, corn tortillas, cream, cumin, garlic, masala, molasses, olive oil, onions, paprika, rice, rum, salsa, smoked bacon, sour cream, tortillas",
      "id": 4
    }, {
      "Name": "Duck Burger | John Quilter",
      "Image": "http://img.youtube.com/vi/x8tO_GvIo4k/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=x8tO_GvIo4k",
      "Ingredients": "burger buns, cake, coriander, dark soy, duck, egg yolks, eggs, garlic, gin, ginger, ground ginger, ham, hamburger, honey, lemon, mustard, mustard seeds, pectin, rapeseed oil, rice, rice wine, sesame, sesame oil, sesame seeds, shallots, toasted sesame oil, toasted sesame seeds, vegetable oil, vinegar, wine vinegar",
      "id": 5
    }, {
      "Name": "Homemade Beans on Toast Recipe with Bacon | John Quilter",
      "Image": "http://img.youtube.com/vi/Vd91Z8su5to/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=Vd91Z8su5to",
      "Ingredients": "English mustard, bacon, baked beans, brown sugar, cheese, chili, chipotle, coffee, coffee beans, garlic, gin, herbs, molasses, mustard, mustard powder, olive oil, shallots",
      "id": 7
    }, {
      "Name": "Asian Americans Make Asian Dishes For The First Time • Tasty",
      "Image": "http://img.youtube.com/vi/ZHVC-QMp6bU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ZHVC-QMp6bU",
      "Ingredients": "beef, beef shank, boiled eggs, chicken, eggs, gin, ginger, methi, noodles, rice, salami, scallions, soup",
      "id": 8
    }, {
      "Name": "I Made A Romantic Dinner In 15 Minutes • Tasty",
      "Image": "http://img.youtube.com/vi/esc3xBBn9ic/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=esc3xBBn9ic",
      "Ingredients": "baking powder, balsamic vinegar, basil, butter, cake, cheese, chicken, chives, chocolate, coco, cocoa, cocoa powder, cola, cream, cream cheese, crust, dry white wine, flour, fresh mint, fresh mozzarella, garlic, gin, granulated sugar, herbs, ice cream, lobster, methi, milk, mint, olive oil, orzo, pasta, pepper, rice, scallops, spinach, truffles, veggies, vinegar, virgin olive oil, white wine",
      "id": 9
    }, {
      "Name": "I Made Grilled Cheese Sandwiches Using 11 Hacks In A Row • Tasty",
      "Image": "http://img.youtube.com/vi/0AbOS_v6_T4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=0AbOS_v6_T4",
      "Ingredients": "bread, brown butter, browning, butter, cheese, cookies, crust, dough, eggs, garlic, honey, methi, sandwiches, sourdough, sourdough bread, tripe, uni",
      "id": 10
    }, {
      "Name": "How To Make 3 Different Recipes With Kimchi • Tasty",
      "Image": "http://img.youtube.com/vi/63nD0oPjQTo/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=63nD0oPjQTo",
      "Ingredients": "American cheese, bacon, bacon fat, bread, butter, cake, cheddar cheese, cheese, cream, eggs, garlic, gin, heavy cream, kimchi, methi, noodles, olive oil, pasta, rendered bacon fat, rice, scallions, shallots, sharp cheddar cheese, soften, spaghetti, spam",
      "id": 11
    }, {
      "Name": "How To BBQ on a Stove Top Grill • Tasty",
      "Image": "http://img.youtube.com/vi/pqMRaMdXQVo/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=pqMRaMdXQVo",
      "Ingredients": "Up, america, beer, bell pepper, berries, broccoli, broccolini, brown sugar, butter, chicken, chipotle, chocolate, cola, corn, cumin, feet, garlic, garlic powder, ketchup, lemon, lemon pepper, liquid smoke, methi, olive oil, onion powder, paprika, parsley, pepper, potatoes, raspberries, smoked paprika, sweet corn,",
      "id": 12
    }, {
      "Name": "How To Make A 3-Course Meal In One Pan • Tasty",
      "Image": "http://img.youtube.com/vi/dthjauMsbRw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=dthjauMsbRw",
      "Ingredients": "bacon, bacon grease, basil, cheese, chocolate, cola, corn, crackers, cream, cream cheese, crush, crust, dough, eggs, flour, fresh basil, fresh mozzarella, graham crackers, ham, jalape, marshmallows, methi, milk, milk chocolate, mint, mozzarella cheese, pastry, pepper, pepperoni, pesto, pie crust, pizza sauce, pork, puff pastry, soup, whipped cream",
      "id": 13
    }, {
      "Name": "We Tried Cooking With Our Moms On Zoom • Tasty",
      "Image": "http://img.youtube.com/vi/iZVxXpz73KM/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=iZVxXpz73KM",
      "Ingredients": "ale, bok choy, butter, carrots, cheese, chicken, corn, corn starch, dill, flour, gin, ginger, ham, methi, mustard, onions, panko, parsley, potatoes, rice, rum, sage, sausages, spinach, starch, veal, veggies",
      "id": 14
    }, {
      "Name": "One-Pot. Kid Friendly. Mom Approved: Hamburger Helper From Scratch • Tasty",
      "Image": "http://img.youtube.com/vi/SwWFhzgXgsk/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=SwWFhzgXgsk",
      "Ingredients": "bacon, beef, beef stock, bell pepper, carrots, cheese, chicken, cream, garlic, ground beef, ham, hamburger, herbs, methi, milk, noodles, onions, paprika, parsley, pasta, pepper, red bell pepper, rice, smoked paprika, soften, starch, thyme, tomato paste, tomatoes, veggies, whole milk",
      "id": 15
    }, {
      "Name": "I Made Fried Chicken And Waffles With Leftover Sourdough Starter • Tasty",
      "Image": "http://img.youtube.com/vi/a_TwEAo9RuU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=a_TwEAo9RuU",
      "Ingredients": "all-purpose flour, baking powder, bread, butter, buttermilk, chicken, chicken thighs, dough, eggs, flour, garlic, garlic powder, juice, lemon, lemon juice, methi, milk, onion powder, pepper, sourdough, sourdough bread, whole milk, yeast",
      "id": 16
    }, {
      "Name": "Can This Chef Make Tater Tots Fancy? • Tasty",
      "Image": "http://img.youtube.com/vi/NWttynGJIHI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=NWttynGJIHI",
      "Ingredients": "beef, beef stock, butter, chicken, cream, egg yolks, eggs, flour, garlic, gravy, ground beef, heavy cream, ice cream, melted butter, methi, mushrooms, olive oil, onions, pepper, potatoes, pudding, red wine, rice, rosemary, shiitake, soften, tater tots, thyme,",
      "id": 17
    }, {
      "Name": "I Made 3 Meals With 1 Can Of Spam •xa0Tasty",
      "Image": "http://img.youtube.com/vi/nzf2FCMHBJ8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=nzf2FCMHBJ8",
      "Ingredients": "bread, carrots, fried rice, frozen peas, garlic, gin, ginger, lettuce, nori, oats, onions, peas, rice, soften, soy sauce, spam, starch, vinegar",
      "id": 18
    }, {
      "Name": "Can This Chef Create A Recipe From My Pantry & Fridge? • Tasty",
      "Image": "http://img.youtube.com/vi/6ibZezGV0Kc/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=6ibZezGV0Kc",
      "Ingredients": "asparagus, black beans, broccoli, brown rice, cilantro, coco, coconut, coconut milk, cola, corn, cream, curry, curry paste, fresh green bean, fried rice, frozen broccoli, frozen corn, garlic, gin, ginger, green beans, lettuce, methi, milk, noodles, olive oil, onions, pasta, penne, penne pasta, pepper, pesto, rice, rice noodles, spaghetti, tofu,",
      "id": 19
    }, {
      "Name": "3-Minute Vs. 30-Minute Vs. 3-Hour Curry •xa0Tasty",
      "Image": "http://img.youtube.com/vi/ChLHWoXitQU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ChLHWoXitQU",
      "Ingredients": "bay leaf, beef, black pepper, black peppercorns, bread, butter, cardamom, cayenne, chicken, chickpeas, chili, chili powder, cilantro, cinnamon, coco, coconut, coconut cream, coconut milk, coconut oil, coriander, coriander powder, corn, cream, cubed beef, cumin, curry, curry leaves, curry powder, curry sauce, dough, fennel, fenugreek, fenugreek leaves, fish, flatbread, flour, fresh cilantro, garlic, garlic powder, gin, ginger, juice, lime, lime juice, masala, methi, milk, minced garlic, minced ginger, mustard, mustard seeds, onion powder, onions, peas, pepper, peppercorns, red pepper, rice, roti, sea salt, soften, soup, spinach, steamed rice, tamarind, tamarind paste, tomatoes, wheat, wheat flour, whole wheat flour",
      "id": 20
    }, {
      "Name": "Which Quarantine Recipe Do You Want To Make? • Tasty",
      "Image": "http://img.youtube.com/vi/VCDwb5cqQ_E/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=VCDwb5cqQ_E",
      "Ingredients": "bacon, bacon bits, bacon fat, biscuits, black pepper, butter, cake, cake mix, carrots, cauliflower, cheese, chicken, coke, cream, egg whites, eggs, flour, garlic, ice cream, methi, milk, pancake mix, pasta, peas, pepper, potatoes, ramen, roux, shells, soften, veggies, vinegar, white vinegar, white wine, white wine vinegar, wine vinegar, zucchini",
      "id": 21
    }, {
      "Name": "How To Make Dinner and Dessert for Good Gut Health •xa0Tasty",
      "Image": "http://img.youtube.com/vi/t13Q0iXrJy8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=t13Q0iXrJy8",
      "Ingredients": "apples, broccoli, broccoli sprouts, butter, cardamom, cayenne, cayenne pepper, chicken, cilantro, cinnamon, coco, coconut, coriander, coriander seeds, crumble topping, cumin, dandelion, dandelion greens, extract, fish, flour, fresh cilantro, garlic, gin, ginger, greens, ground coriander, ham, juice, legumes, lemon, lemon juice, lentils, marinade, mustard, oat flour, oats, olive oil, orange, pectin, pepper, rum, salmon, soften, sprouts, vanilla,",
      "id": 22
    }, {
      "Name": "How To Make 3 Easy Dinners Kids Will Love • Tasty",
      "Image": "http://img.youtube.com/vi/TRVtj43eLGM/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=qQcU5SZ7lRU",
      "Ingredients": "bay leaf, beef, bread, brown sugar, butter, carrots, cauliflower, cheese, chicken, chickpeas, chopped onion, cilantro, coriander, cucumber, cumin, cumin seed, fresh cilantro, garlic, gin, ginger, ground beef, ground meat, ham, hamburger, hummus, ketchup, lamb, lettuce, masala, methi, mint, mustard, naan, onions, orange, paprika, peas, pepper, pickles, potato chips, quinoa, rice, shredded carrots, shredded zucchini, soften, spinach, sweet paprika, tamarind, tamarind paste, tomatoes, veggies, zucchini",
      "id": 23
    }, {
      "Name": "I Tried To Make A Three Course Meal With Pantry Staples • Tasty",
      "Image": "http://img.youtube.com/vi/A6wBy3UoXl8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=MnZzVt5_yb8",
      "Ingredients": "ahi, all-purpose flour, butter, carrots, celery, celery stick, chickpeas, chocolate, chocolate cookie, cola, cookies, dough, egg yolks, eggs, flour, fresh lemon, fresh lemon juice, frozen peas, garbanzo beans, garlic, hummus, juice, lemon, lemon juice, methi, milk, minced garlic, nut butter, olive oil, paprika, pasta, peanut butter, peas, pepper, tahini",
      "id": 24
    }, {
      "Name": "How To Make Pork and Chicken Hallacas As Made By Jorge Rincon",
      "Image": "http://img.youtube.com/vi/mWpG8ZEctcc/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=6gbHjCejbY8",
      "Ingredients": "ale, jack, methi, mustard, tamales, uni",
      "id": 25
    }, {
      "Name": "Handmade Lasagna As Made By Joe Sasto •xa0Tasty",
      "Image": "http://img.youtube.com/vi/_QKiBRbqOzI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=dk_XtYNACys",
      "Ingredients": "bechamel, beef, butter, cream, dough, dried pasta, eggs, flour, fresh pasta, gin, gravy, ground beef, ham, hot sauce, meat sauce, methi, milk, nonstick spray, pasta, roast beef, roux, spinach, tomato sauce, turkey, veggies",
      "id": 26
    }, {
      "Name": "6 Japanese Noodle Recipes • Tasty",
      "Image": "http://img.youtube.com/vi/U53VgzzXcEg/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=DmfzXtN4o4c",
      "Ingredients": "angel hair, baking soda, beef, butter, cabbage, carrots, cassava, cava, cheese, chicken, chicken broth, dashi, eggplant, gin, ham, jelly, kimchi, lemon, methi, miso, noodles, nut butter, onions, pasta, peanut butter, pork, quail, ramen, ramen noodles, rice, salmon, shrimp, soba, soba noodles, soda, soft-boiled egg, somen, soup, soy sauce, squid, tomatoes, udon, wheat",
      "id": 27
    }, {
      "Name": "How Tacos Al Pastor Is Made • Tasty",
      "Image": "http://img.youtube.com/vi/JOvLXKU6mB4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=jKJ8v2bdLmI",
      "Ingredients": "inch thick, bay leaf, chard, chiles, chili, cilantro, cinnamon, cinnamon sticks, corn, crust, dough, garlic, guacamole, juice, lime, marinade, molasses, onions, pepper, peppercorns, pesto, pineapple, pork, pork belly, pork shoulder, syrup, vinegar",
      "id": 28
    }, {
      "Name": "Golden Chicken Sandwich As Made By Chef Kuniko Yagi • Tasty",
      "Image": "http://img.youtube.com/vi/dpdo6Tu5VsA/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=3gZAvehEBl0",
      "Ingredients": "ahi, ale, cabbage, chicken, coleslaw, cream, crust, flour, garlic, gin, ginger, marinade, methi, olive oil, pickles, potato starch, rice, sesame, shredded cabbage, slaw, soy sauce, starch, tahini, tahini paste, vinaigrette, wheat",
      "id": 29
    }, {
      "Name": "Ries Favorite Soba Noodle Recipes • Tasty",
      "Image": "http://img.youtube.com/vi/O564dz6rSL4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=mWpG8ZEctcc",
      "Ingredients": "carrots, cassava, gin, methi, noodles, onions, ramen, soba, soba noodles, soup, wheat",
      "id": 30
    }, {
      "Name": "Meatless Tacos 5 Ways With Rachel • Tasty",
      "Image": "http://img.youtube.com/vi/ioIWgvvfcAU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=VE-OOeJqiQE",
      "Ingredients": "bananas, beef, bread, cauliflower, cumin, ground beef, jack, jackfruit, methi, mushrooms, pork, soy sauce, tempeh, tofu",
      "id": 31
    }, {
      "Name": "1 Minute Vs. 1 Hour Vs. 1 Day Noodles • Tasty",
      "Image": "http://img.youtube.com/vi/NM4ArR-qbHQ/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=O8JASd1jdZ0",
      "Ingredients": "bean paste, beef, black vinegar, bok choy, cane sugar, celery, chili, chili oil, citron, coriander, coriander seeds, corn, crust, cucumber, dark soy, dark soy sauce, eggs, garlic, gelatin, gin, ginger, ham, methi, minced garlic, miso, noodles, pepper, peppercorns, pork, rock sugar, scallions, sesame, sesame seeds, shallots, short rib, soup, soy sauce, starch, steak, tomatoes, vinegar",
      "id": 32
    }, {
      "Name": "Ries Somen Noodle Recipe • Tasty",
      "Image": "http://img.youtube.com/vi/7O6RNyVO60w/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=2eZLoKU2s14",
      "Ingredients": "butter, jelly, lemon, methi, noodles, nut butter, peanut butter, rice, somen",
      "id": 33
    }, {
      "Name": "Trendy Vs. Traditional: Burgers •xa0Tasty",
      "Image": "http://img.youtube.com/vi/cFRtiEvwBYk/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=iNnk0ET-XYY",
      "Ingredients": "bacon, bacon grease, bonito, bonito flakes, buffalo, cake, cheese, cooking wine, eggs, fish, garlic, gin, ginger, jam, juice, ketchup, lettuce, methi, mustard, noodles, onions, pickles, ramen, sake, seaweed, sesame, sesame oil, soft-boiled egg, soup, soy sauce, starch",
      "id": 34
    }, {
      "Name": "Giant 30 Pound Burger Vs. 1/4 Pound Burger • Tasty",
      "Image": "http://img.youtube.com/vi/UtfyqgRfY0w/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=6xDShdD6VQQ",
      "Ingredients": "aioli, ale, america, apple cider, apple cider vinegar, beef, brioche, butter, cheddar cheese, cheese, cheese slices, cider, cider vinegar, cream, dough, eggs, garlic, gin, ground beef, ham, hamburger, juice, lemon, lemon juice, lettuce, melted butter, methi, mustard, olive oil, onions, pepper, pickle juice, pickles, tomatoes, vinegar",
      "id": 35
    }, {
      "Name": "How To Make Thai Street Food At Home •xa0Tasty",
      "Image": "http://img.youtube.com/vi/AKZnowibf3Y/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=zL-LVYdfHZ4",
      "Ingredients": "brown sugar, candy, chili, cilantro, coriander, crush, fish, fish sauce, fried garlic, garlic, gin, ginger, green onions, juice, lemon, lemongrass, lime, lime juice, methi, mint, mirin, onions, pepper, pork, pork belly, radishes, rice, sake, salmon, sesame, sesame seeds, shallots, shrimp, shrimp paste, soft-boiled egg, soup, soy sauce, tofu",
      "id": 36
    }, {
      "Name": "How To Make Bun Bo Xa Ot A Traditional Vietnamese Dish • Tasty",
      "Image": "http://img.youtube.com/vi/v5jEmQLcYCo/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=rd0sZOOKrPY",
      "Ingredients": "anchovies, chili, chili oil, eggs, fish, fish sauce, fresh lemon, herbs, lemon, lemongrass, lettuce, noodles, nuts, peanuts, pickles, rice, sage, shallots, steak, vinaigrette",
      "id": 37
    }, {
      "Name": "How To Make 2 Styles Of Fried Chicken By Marcus Samuelsson •xa0Tasty",
      "Image": "http://img.youtube.com/vi/MCKKvyFToYQ/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=SepzxVh78wk",
      "Ingredients": "ale, beef, beef brisket, beer, bread, brisket, butter, chicken, chili, chillies, chocolate, chocolate sauce, cola, corn, flour, garlic, gin, lamb, marinade, methi, onions, pork, starch",
      "id": 38
    }, {
      "Name": "Braised Chicken Thighs With Red Rice As Made By Hugh Acheson •xa0Tasty",
      "Image": "http://img.youtube.com/vi/ErS_A1HgWIs/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=WX6RrBNW690",
      "Ingredients": "chicken, chicken thighs, gin, methi, rice,",
      "id": 39
    }, {
      "Name": "Gluten-Free Chicken Taquitos As Made By Parker Bates •xa0Tasty",
      "Image": "http://img.youtube.com/vi/k7HdZejNUdg/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=JOvLXKU6mB4",
      "Ingredients": "cheese, chicken, cream, jalape, meatballs, spaghetti, tortillas",
      "id": 40
    }, {
      "Name": "Ries Favorite Japanese Noodle Dishes • Tasty",
      "Image": "http://img.youtube.com/vi/dP6V5ldIym0/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=zwW0n5BcdaA",
      "Ingredients": "beef, butter, cabbage, cava, cheese, chicken, chicken broth, dashi, eggplant, kimchi, lemon, miso, noodles, pork, quail, ramen, ramen noodles, salmon, shrimp, soba, soft-boiled egg, soy sauce, squid, tomatoes, udon,",
      "id": 41
    }, {
      "Name": "How To Make Filipino Arroz Caldo As Made By Janna •xa0Tasty",
      "Image": "http://img.youtube.com/vi/TZGWxUSmPbw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=dpdo6Tu5VsA",
      "Ingredients": "ale, boiled eggs, chicken, dough, eggs, fish, fish sauce, fried garlic, garlic, gin, ginger, hard-boiled egg, methi, minced garlic, onions, rice, uni",
      "id": 42
    }, {
      "Name": "How To Make Alvins Prime Rib With Garlic Butter • Tasty",
      "Image": "http://img.youtube.com/vi/cV-r5aZWOFE/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=UTkHAWLVbJ8",
      "Ingredients": "beef, beef fat, beef stock, butter, drippings, flour, garlic, gravy, ham, juice, potatoes, steak, veal,",
      "id": 43
    }, {
      "Name": "Chifa-Style Chaufa De Mariscos As Made By Santos Loo • Tasty",
      "Image": "http://img.youtube.com/vi/8DappleWiqs/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=YADwW0ksTws",
      "Ingredients": "anise, chili, chili pepper, cinnamon, corn, eggs, fennel, garlic, gin, methi, mussels, oyster sauce, pepper, sage, shells, soy sauce, star anise, uni",
      "id": 44
    }, {
      "Name": "Italian Chicken Dinner 2 Ways • Tasty",
      "Image": "http://img.youtube.com/vi/7PqVVjEW0LM/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=KUJi1CKASiY",
      "Ingredients": "ale, bay leaf, bread, butter, chicken, chicken breasts, chicken stock, cod, eggs, flour, garlic, gin, herbs, methi, olive oil, pepper, red pepper, rum, tomato sauce, tomatoes, uni",
      "id": 45
    }, {
      "Name": "Alvins Lasagna Party Ring • Tasty",
      "Image": "http://img.youtube.com/vi/b1KxAHVAbMg/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=y4z7tSRt75M",
      "Ingredients": "cake, cheese, gin, lasagna noodles, meat sauce, methi, noodles, ricotta, soup",
      "id": 46
    }, {
      "Name": "How To Make A Loaded Scalloped Potato Dome With Alvin • Tasty",
      "Image": "http://img.youtube.com/vi/VuAwALTubuY/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ZxlsFi7huOo",
      "Ingredients": "bacon, baked potato, bechamel, cheddar cheese, cheese, chives, cream, gin, green onions, ham, methi, onions, pepper, potatoes, uni",
      "id": 47
    }, {
      "Name": "5-Minute Vs. 50-Minute Vs. 5-Hour Steak • Tasty",
      "Image": "http://img.youtube.com/vi/hQT7PN4Tzsg/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=EOJHhSzjPIQ",
      "Ingredients": "arugula, asparagus, beef, beef fat, beef stock, bread, butter, cheese, coarse salt, cream, crush, crust, filet, filet mignon, flour, garlic, greens, ham, honey, jack, juice, mashed potatoes, methi, milk, parsley, pepper, potatoes, red wine, rosemary, salad dressing, skirt steak, soften, softened butter, soy sauce, steak",
      "id": 48
    }, {
      "Name": "How to Make Traditional Ethiopian Food With Marcus Samuelsson • Tasty",
      "Image": "http://img.youtube.com/vi/a0Z1vpJNrtE/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=5XH9oIBsQvI",
      "Ingredients": "beef, beer, bread, broccoli, broccoli rabe, butter, cake, cardamom, cheese, chili, chili pepper, chopped cilantro, chopped tomatoes, cilantro, coffee, crush, cumin, dough, drippings, fenugreek, flank steak, garlic, gin, ginger, greens, juice, lamb, loin, methi, milk, mustard, mustard greens, onions, oregano, pasta, pepper, ricotta, rosemary, sourdough, steak, tomatoes, vinegar",
      "id": 49
    }, {
      "Name": "Easy Dinner For A Cozy Valentines Day At Home • Tasty",
      "Image": "http://img.youtube.com/vi/1NZSLM3Phco/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=c20PUnVNtxU",
      "Ingredients": "ale, bread, butter, chicken, chocolate, cola, curry, dill, harissa, herbs, honey, juice, leeks, lemon, lemon juice, marshmallows, methi, onions, pepper, rice, soup, sprinkles, veggies",
      "id": 50
    }, {
      "Name": "How To Make A Filling Salad Recipe • Tasty",
      "Image": "http://img.youtube.com/vi/nqyLZPpI_3s/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=rIRfDNL12Fk",
      "Ingredients": "ale, apples, arugula, bell pepper, black beans, boiled eggs, carrots, chicken, chickpeas, cream, croutons, cucumber, eggs, flour, fresh herbs, greens, grits, herbs, kale, methi, mustard, nuts, olives, onions, oregano, pasta, peas, pepitas, pepper, pitas, pomegranate, pomegranate seeds, potatoes, quinoa, red wine, sesame, shrimp, spinach, tomatoes, veggies, vinaigrette, vinegar, walnuts",
      "id": 51
    }, {
      "Name": "How To Roast Vegetables • Tasty",
      "Image": "http://img.youtube.com/vi/NCHnpfbD894/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=In7Sd5Cn_VI",
      "Ingredients": "beets, butter, butternut squash, cauliflower, chili, cream, cumin, fresh parsley, garlic, herbs, olive oil, onion powder, paprika, parsley, pepper, pesto, potatoes, sprouts, squash, veggies",
      "id": 52
    }, {
      "Name": "The Most Fool-Proof Roast Chicken Youll Ever Make • Tasty",
      "Image": "http://img.youtube.com/vi/DcIS0onSv7U/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=4Yvr-c6s_Mw",
      "Ingredients": "beef, beef stock, carrots, celery, chicken, chicken stock, drumstick, feet, fish, fish stock, garlic, gin, herbs, homemade chicken stock, juice, kosher salt, onions, oysters, pepper, rosemary, roti, rum, sage, thyme,",
      "id": 53
    }, {
      "Name": "Holiday Garlic Herb Porchetta",
      "Image": "http://img.youtube.com/vi/aq3JpRryfxI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=9CppibXfuuo",
      "Ingredients": "boneless, garlic, herbs, lemon, loin, pork, pork belly, pork roast",
      "id": 54
    }, {
      "Name": "Short Ribs Stuffed Sticky Rice As Made By Chef JJ Johnson",
      "Image": "http://img.youtube.com/vi/4iM-UsX13W4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=o4t_jc0hSjo",
      "Ingredients": "cinnamon, curry, jalape, juice, lamb, methi, orange, orange juice, red wine, rice, short rib, starch, sticky rice, uni",
      "id": 55
    }, {
      "Name": "How To Make Spaghetti And Meatballs",
      "Image": "http://img.youtube.com/vi/gIe2CJYwkj8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=UZB3BZ0r62Y",
      "Ingredients": "cheese, crush, crushed tomatoes, fresh herbs, fresh onion, garlic, herbs, marinara sauce, meatballs, methi, onions, pasta, pasta sauce, ricotta, soften, spaghetti, tomato paste, tomatoes",
      "id": 56
    }, {
      "Name": "Mexican Carnitas As Made By Claudette Zepeda-Wilkins",
      "Image": "http://img.youtube.com/vi/sghWzzRvIXE/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=sed2BW39g60",
      "Ingredients": "ale, chicken, methi, onions, pickled onion, pork, veggies",
      "id": 57
    }, {
      "Name": "How To Make French “Chicken With Wine” (Coq Au Vin)",
      "Image": "http://img.youtube.com/vi/lESyM-fdgfE/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=dhFw_4BpBkE",
      "Ingredients": "bacon, bay leaf, bouquet garni, brandy, burgundy, chicken, crust, flour, fresh veget, garlic, gelatin, herbs, juice, marinade, methi, mushrooms, onions, parsley, pearl onions, pepper, soften, starch, tomato paste, veggies",
      "id": 58
    }, {
      "Name": "We Tried To Make Pizzas With Zero Waste",
      "Image": "http://img.youtube.com/vi/rp-TqMxdfMY/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=NcO2TXapvK8",
      "Ingredients": "basil, bread, bread flour, cheese, coffee, crust, dough, flour, fresh basil, gari, garlic, garlic powder, gin, ginger, methi, molasses, mozzarella cheese, nutritional yeast, olive oil, onions, oregano, pepper, pizza sauce, sake, steak, tomato paste, tomato sauce, tomatoes, tuna, vegan cheese, yeast",
      "id": 59
    }, {
      "Name": "Mexican Sopes with Diana and Elvira",
      "Image": "http://img.youtube.com/vi/QZxXyvNhgc4/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=7O6RNyVO60w",
      "Ingredients": "chili, dough, hot sauce, methi, steak, tomatoes",
      "id": 60
    }, {
      "Name": "Award-Winning Cuban Sandwich by El Cochinito",
      "Image": "http://img.youtube.com/vi/OKJVZTMsLIY/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=Pv4PFe6pcHE",
      "Ingredients": "cheese, cumin, garlic, juice, lime, lime juice, marinade, milk, oregano, pepper, pickles, pork, pork butt, silver",
      "id": 61
    }, {
      "Name": "How I Make My Favorite Hispanic Recipes",
      "Image": "http://img.youtube.com/vi/4ZgFO-O0-Ek/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=-bTMtIyd_PI",
      "Ingredients": "beef, bread, cheese, corn, cream, dulce de leche, eggs, gin, ground beef, guava, guava paste, heavy cream, methi, milk, plantains, pudding, sage, tomatoes",
      "id": 62
    }, {
      "Name": "Easy Chicken Curry with Kanchan Koya",
      "Image": "http://img.youtube.com/vi/Ut6hZL0FbtA/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=mwExFzKorws",
      "Ingredients": "cardamom, cayenne, cayenne pepper, chicken, cinnamon, coriander, cumin, curry, mint, pepper, rice, spices",
      "id": 63
    }, {
      "Name": "Nicaraguan Vigorón and Tajadas",
      "Image": "http://img.youtube.com/vi/CohPdJeIfIw/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=U9bM_mnoOSg",
      "Ingredients": "cabbage, gin, onions, vinegar, yuca",
      "id": 64
    }, {
      "Name": "Salvadoran Pupusas as Made by Curly and His Abuelita",
      "Image": "http://img.youtube.com/vi/-7L0LhEd0GI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=AKZnowibf3Y",
      "Ingredients": "cheese, gin, sauerkraut, tortillas",
      "id": 65
    }, {
      "Name": "Family Arepa Recipe As Made By Cesar",
      "Image": "http://img.youtube.com/vi/RvdLHU92glU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=iummgPuiGVk",
      "Ingredients": "avocado, bread, butter, cheese, chicken, cilantro, corn, cornmeal, dough, eggs, gin, ham, methi, pepper, roti, uni",
      "id": 66
    }, {
      "Name": "Kenyan Barbecue: Restaurant vs. Homemade",
      "Image": "http://img.youtube.com/vi/SkRQMxDd55M/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=FgFNFVwJx5E",
      "Ingredients": "ahi, beef, chicken, cod, fresh herbs, goat, ham, herbs, lamb, marinade, methi, oats, pears, pectin, soup, vinegar",
      "id": 67
    }, {
      "Name": "Homemade Tamales Around Latin America",
      "Image": "http://img.youtube.com/vi/eB41-Y7vPlM/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=v5jEmQLcYCo",
      "Ingredients": "ale, baking powder, baking soda, banana leaves, beef, corn, corn husks, dough, garbanzo beans, gin, ground beef, ketchup, lard, lime, methi, pork, raisins, soda, soften, tamales, tomatoes, yuca",
      "id": 68
    }, {
      "Name": "How I Make My Favorite Japanese Recipes",
      "Image": "http://img.youtube.com/vi/T6GmeOnoZec/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=1sSRvt8lzZw",
      "Ingredients": "beef, cake, chicken, cream, curry, dough, eggs, flour, ketchup, mirin, mochi, noodles, nuts, pastry, ramen, rice, sake, soup, soy sauce, starch, tofu, udon, wasabi",
      "id": 69
    }, {
      "Name": "How to Make Smoked BBQ Pork Belly with JJ",
      "Image": "http://img.youtube.com/vi/q_DkgmxQHwc/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=XBJKi2tcKkE",
      "Ingredients": "barbecue sauce, gin, pork, pork belly, steak",
      "id": 70
    }, {
      "Name": "Lamb Biryani",
      "Image": "http://img.youtube.com/vi/N5QFGUmTGXQ/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=OEi_ksI7EsU",
      "Ingredients": "ale, goat, ham, lamb, methi, turkey, uni",
      "id": 71
    }, {
      "Name": "How I Make Viral Food Videos",
      "Image": "http://img.youtube.com/vi/Ua-A1TyDgc8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=EafiIcz4TuA",
      "Ingredients": "bread, cake, cheese, chicken, cream, melon, methi, noodles, potatoes, watermelon",
      "id": 72
    }, {
      "Name": "Pork Belly Adobo by Chef Leah Cohen",
      "Image": "http://img.youtube.com/vi/UdSNLnlCpY8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=YpTFk5X18Y4",
      "Ingredients": "adobo, bacon, chicken, crush, pig, pork, pork belly, rice, sage",
      "id": 73
    }, {
      "Name": "Chilaquiles As Made By Andrea Mares",
      "Image": "http://img.youtube.com/vi/tNntJvbyuNc/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=WwvYif45iRU",
      "Ingredients": "avocado, cilantro, gin, queso fresco, tortillas, uni",
      "id": 74
    }, {
      "Name": "Arroz Con Pollo With Matt And Patrick",
      "Image": "http://img.youtube.com/vi/orqkQ2e7Pe8/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=EJ20DSVhjmM",
      "Ingredients": "carrots, chicken, gari, peas, rice",
      "id": 75
    }, {
      "Name": "Pollo Ciudad as made by Susan Feniger",
      "Image": "http://img.youtube.com/vi/Js9pEiOygVI/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=qzJePHIaabc",
      "Ingredients": "brown sugar, chicken, chili, cilantro, cilantro stems, cream, cumin, heavy cream, mushrooms, tomatoes, vinegar",
      "id": 76
    }, {
      "Name": "The Tastiest Taco Ive Ever Eaten",
      "Image": "http://img.youtube.com/vi/kD1Q0lo749g/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=JbGFJp_6KdE",
      "Ingredients": "avocado, cabbage, cassava, celery, chard, cheese, chili, chorizo, cilantro, coco, cocoa, cola, corn, cotija, cream, curry, gari, garlic, gin, grapefruit, jack, jack cheese, methi, milk, nuts, onions, orange, peanut sauce, peanuts, pesto, potatoes, red wine, roasted peanuts, salsa, slaw, tortillas, uni",
      "id": 77
    }, {
      "Name": "Short Rib Ragù",
      "Image": "http://img.youtube.com/vi/utSKr1horSE/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=TsDfr4qbNuU",
      "Ingredients": "browning, crust, dates, gin, methi, red wine, roti, short rib, steak, tomato paste,",
      "id": 78
    }, {
      "Name": "Homemade Chicken Shawarma As Made By Ben Stiller and Ahmed Badr",
      "Image": "http://img.youtube.com/vi/P4b7muX5S_g/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=ViTqj40BMGA",
      "Ingredients": "chicken, cream, garlic, garlic sauce, methi, uni",
      "id": 79
    }, {
      "Name": "Filipino-Style Pork Stir-Fried Noodles (Lechon Pancit) By Jeepney",
      "Image": "http://img.youtube.com/vi/LKOb1s9nRwU/maxresdefault.jpg",
      "Source": "https://www.youtube.com/watch?v=LJoopODId7k",
      "Ingredients": "adobo, ale, banana leaves, drippings, garlic, ham, hamburger, juice, lemon, lemongrass, methi, onions, pig, pork, pork belly, rum, sage",
      "id": 80
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


export default App;
