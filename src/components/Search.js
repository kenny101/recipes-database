import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const ingredientOptions = [{
  text: "Bread",
  key: "bread",
  value: "bread"
}, {
  text: "Butter",
  key: "butter",
  value: "butter"
}, {
  text: "Pepper",
  key: "pepper",
  value: "pepper"
}, {
  text: "Methi",
  key: "methi",
  value: "methi"
}, {
  text: "Gin",
  key: "gin",
  value: "gin"
}, {
  text: "Sugar",
  key: "sugar",
  value: "sugar"
}, {
  text: "Cream",
  key: "cream",
  value: "cream"
}, {
  text: "Garlic",
  key: "garlic",
  value: "garlic"
}, {
  text: "Flour",
  key: "flour",
  value: "flour"
}, {
  text: "Juice",
  key: "juice",
  value: "juice"
}, {
  text: "Cheese",
  key: "cheese",
  value: "cheese"
}, {
  text: "Milk",
  key: "milk",
  value: "milk"
}, {
  text: "Onions",
  key: "onions",
  value: "onions"
}, {
  text: "Olive Oil",
  key: "olive-oil",
  value: "olive-oil"
}, {
  text: "Chicken",
  key: "chicken",
  value: "chicken"
}, {
  text: "Eggs",
  key: "eggs",
  value: "eggs"
}, {
  text: "Lemon",
  key: "lemon",
  value: "lemon"
}, {
  text: "Corn",
  key: "corn",
  value: "corn"
}, {
  text: "Rum",
  key: "rum",
  value: "rum"
}, {
  text: "Chili",
  key: "chili",
  value: "chili"
}, {
  text: "Rice",
  key: "rice",
  value: "rice"
}, {
  text: "Chocolate",
  key: "chocolate",
  value: "chocolate"
}, {
  text: "Ale",
  key: "ale",
  value: "ale"
}, {
  text: "Roast",
  key: "roast",
  value: "roast"
}, {
  text: "Bacon",
  key: "bacon",
  value: "bacon"
}, {
  text: "Coco",
  key: "coco",
  value: "coco"
}, {
  text: "Meal",
  key: "meal",
  value: "meal"
}, {
  text: "Toast",
  key: "toast",
  value: "toast"
}, {
  text: "Fish",
  key: "fish",
  value: "fish"
}, {
  text: "Vanilla",
  key: "vanilla",
  value: "vanilla"
}, {
  text: "Vinegar",
  key: "vinegar",
  value: "vinegar"
}, {
  text: "Boar",
  key: "boar",
  value: "boar"
}, {
  text: "Potatoes",
  key: "potatoes",
  value: "potatoes"
}, {
  text: "Tomatoes",
  key: "tomatoes",
  value: "tomatoes"
}, {
  text: "Nuts",
  key: "nuts",
  value: "nuts"
}, {
  text: "Ginger",
  key: "ginger",
  value: "ginger"
}, {
  text: "Dough",
  key: "dough",
  value: "dough"
}, {
  text: "Cinnamon",
  key: "cinnamon",
  value: "cinnamon"
}, {
  text: "Vegetables",
  key: "vegetables",
  value: "vegetables"
}, {
  text: "Rub",
  key: "rub",
  value: "rub"
}, {
  text: "Wine",
  key: "wine",
  value: "wine"
}, {
  text: "Ham",
  key: "ham",
  value: "ham"
}, {
  text: "Spices",
  key: "spices",
  value: "spices"
}, {
  text: "Icing",
  key: "icing",
  value: "icing"
}, {
  text: "Coconut",
  key: "coconut",
  value: "coconut"
}, {
  text: "Batter",
  key: "batter",
  value: "batter"
}, {
  text: "Salad",
  key: "salad",
  value: "salad"
}, {
  text: "Coriander",
  key: "coriander",
  value: "coriander"
}, {
  text: "Beef",
  key: "beef",
  value: "beef"
}, {
  text: "Honey",
  key: "honey",
  value: "honey"
}, {
  text: "Parsley",
  key: "parsley",
  value: "parsley"
}, {
  text: "Berries",
  key: "berries",
  value: "berries"
}, {
  text: "Crust",
  key: "crust",
  value: "crust"
}, {
  text: "Uni",
  key: "uni",
  value: "uni"
}, {
  text: "Beans",
  key: "beans",
  value: "beans"
}, {
  text: "Cumin",
  key: "cumin",
  value: "cumin"
}, {
  text: "Pork",
  key: "pork",
  value: "pork"
}, {
  text: "Mustard",
  key: "mustard",
  value: "mustard"
}, {
  text: "Yolk",
  key: "yolk",
  value: "yolk"
}, {
  text: "Carrots",
  key: "carrots",
  value: "carrots"
}, {
  text: "Soy",
  key: "soy",
  value: "soy"
}, {
  text: "Paprika",
  key: "paprika",
  value: "paprika"
}, {
  text: "Garnish",
  key: "garnish",
  value: "garnish"
}, {
  text: "Mushrooms",
  key: "mushrooms",
  value: "mushrooms"
}, {
  text: "Pasta",
  key: "pasta",
  value: "pasta"
}, {
  text: "Lime",
  key: "lime",
  value: "lime"
}, {
  text: "Peas",
  key: "peas",
  value: "peas"
}, {
  text: "Pastry",
  key: "pastry",
  value: "pastry"
}, {
  text: "Mint",
  key: "mint",
  value: "mint"
}, {
  text: "Curry",
  key: "curry",
  value: "curry"
}, {
  text: "Thyme",
  key: "thyme",
  value: "thyme"
}, {
  text: "Basil",
  key: "basil",
  value: "basil"
}, {
  text: "Starch",
  key: "starch",
  value: "starch"
}, {
  text: "Steak",
  key: "steak",
  value: "steak"
}, {
  text: "Sesame",
  key: "sesame",
  value: "sesame"
}, {
  text: "Herbs",
  key: "herbs",
  value: "herbs"
}, {
  text: "Baking Soda",
  key: "baking-soda",
  value: "baking-soda"
}, {
  text: "Soy Sauce",
  key: "soy-sauce",
  value: "soy-sauce"
}, {
  text: "Ice Cream",
  key: "ice-cream",
  value: "ice-cream"
}, {
  text: "Jam",
  key: "jam",
  value: "jam"
}, {
  text: "Coffee",
  key: "coffee",
  value: "coffee"
}, {
  text: "Almonds",
  key: "almonds",
  value: "almonds"
}, {
  text: "Boiling Water",
  key: "boiling-water",
  value: "boiling-water"
}, {
  text: "Cocoa",
  key: "cocoa",
  value: "cocoa"
}, {
  text: "Wheat",
  key: "wheat",
  value: "wheat"
}, {
  text: "Tuna",
  key: "tuna",
  value: "tuna"
}, {
  text: "Rosemary",
  key: "rosemary",
  value: "rosemary"
}, {
  text: "Yeast",
  key: "yeast",
  value: "yeast"
}, {
  text: "Sour Cream",
  key: "sour-cream",
  value: "sour-cream"
}, {
  text: "Apples",
  key: "apples",
  value: "apples"
}, {
  text: "Cookies",
  key: "cookies",
  value: "cookies"
}, {
  text: "Noodles",
  key: "noodles",
  value: "noodles"
}, {
  text: "Cod",
  key: "cod",
  value: "cod"
}, {
  text: "Gluten",
  key: "gluten",
  value: "gluten"
}, {
  text: "Chicken Stock",
  key: "chicken-stock",
  value: "chicken-stock"
}, {
  text: "Celery",
  key: "celery",
  value: "celery"
}, {
  text: "Plain Flour",
  key: "plain-flour",
  value: "plain-flour"
}, {
  text: "Ketchup",
  key: "ketchup",
  value: "ketchup"
}, {
  text: "Garlic Powder",
  key: "garlic-powder",
  value: "garlic-powder"
}, {
  text: "Spring Onions",
  key: "spring-onions",
  value: "spring-onions"
}, {
  text: "Rye",
  key: "rye",
  value: "rye"
}, {
  text: "Shallots",
  key: "shallots",
  value: "shallots"
}, {
  text: "Cream Cheese",
  key: "cream-cheese",
  value: "cream-cheese"
}, {
  text: "Vegetable Oil",
  key: "vegetable-oil",
  value: "vegetable-oil"
}, {
  text: "Liver",
  key: "liver",
  value: "liver"
}, {
  text: "Wine Vinegar",
  key: "wine-vinegar",
  value: "wine-vinegar"
}, {
  text: "Cocoa Powder",
  key: "cocoa-powder",
  value: "cocoa-powder"
}, {
  text: "Cabbage",
  key: "cabbage",
  value: "cabbage"
}, {
  text: "Strawberries",
  key: "strawberries",
  value: "strawberries"
}, {
  text: "Nutmeg",
  key: "nutmeg",
  value: "nutmeg"
}, {
  text: "Canola",
  key: "canola",
  value: "canola"
}, {
  text: "Cayenne",
  key: "cayenne",
  value: "cayenne"
}, {
  text: "Beer",
  key: "beer",
  value: "beer"
}, {
  text: "Pies",
  key: "pies",
  value: "pies"
}, {
  text: "Bananas",
  key: "bananas",
  value: "bananas"
}, {
  text: "Citrus",
  key: "citrus",
  value: "citrus"
}, {
  text: "Buttermilk",
  key: "buttermilk",
  value: "buttermilk"
}, {
  text: "Fennel",
  key: "fennel",
  value: "fennel"
}, {
  text: "Buns",
  key: "buns",
  value: "buns"
}, {
  text: "Spaghetti",
  key: "spaghetti",
  value: "spaghetti"
}, {
  text: "Candy",
  key: "candy",
  value: "candy"
}, {
  text: "Peanuts",
  key: "peanuts",
  value: "peanuts"
}, {
  text: "Smoked Paprika",
  key: "smoked-paprika",
  value: "smoked-paprika"
}, {
  text: "Sea Salt",
  key: "sea-salt",
  value: "sea-salt"
}, {
  text: "Loin",
  key: "loin",
  value: "loin"
}, {
  text: "Chives",
  key: "chives",
  value: "chives"
}, {
  text: "Biscuits",
  key: "biscuits",
  value: "biscuits"
}, {
  text: "Jalape",
  key: "jalape",
  value: "jalape"
}, {
  text: "Cheddar Cheese",
  key: "cheddar-cheese",
  value: "cheddar-cheese"
}, {
  text: "Chutney",
  key: "chutney",
  value: "chutney"
}, {
  text: "Prawns",
  key: "prawns",
  value: "prawns"
}, {
  text: "Anise",
  key: "anise",
  value: "anise"
}, {
  text: "Cauliflower",
  key: "cauliflower",
  value: "cauliflower"
}, {
  text: "Sherry",
  key: "sherry",
  value: "sherry"
}, {
  text: "Sesame Seeds",
  key: "sesame-seeds",
  value: "sesame-seeds"
}, {
  text: "Double Cream",
  key: "double-cream",
  value: "double-cream"
}, {
  text: "Tortillas",
  key: "tortillas",
  value: "tortillas"
}, {
  text: "Vinaigrette",
  key: "vinaigrette",
  value: "vinaigrette"
}, {
  text: "Curry Leaves",
  key: "curry-leaves",
  value: "curry-leaves"
}, {
  text: "Capers",
  key: "capers",
  value: "capers"
}, {
  text: "Fish Sauce",
  key: "fish-sauce",
  value: "fish-sauce"
}, {
  text: "Virgin Olive Oil",
  key: "virgin-olive-oil",
  value: "virgin-olive-oil"
}, {
  text: "Mustard Seeds",
  key: "mustard-seeds",
  value: "mustard-seeds"
}, {
  text: "Bay Leaf",
  key: "bay-leaf",
  value: "bay-leaf"
}, {
  text: "Chicken Thighs",
  key: "chicken-thighs",
  value: "chicken-thighs"
}, {
  text: "Pesto",
  key: "pesto",
  value: "pesto"
}, {
  text: "Cayenne Pepper",
  key: "cayenne-pepper",
  value: "cayenne-pepper"
}, {
  text: "Sweet Potatoes",
  key: "sweet-potatoes",
  value: "sweet-potatoes"
}, {
  text: "Brandy",
  key: "brandy",
  value: "brandy"
}, {
  text: "Garlic Paste",
  key: "garlic-paste",
  value: "garlic-paste"
}, {
  text: "Pectin",
  key: "pectin",
  value: "pectin"
}, {
  text: "Tofu",
  key: "tofu",
  value: "tofu"
}, {
  text: "Caster Sugar",
  key: "caster-sugar",
  value: "caster-sugar"
}, {
  text: "Roti",
  key: "roti",
  value: "roti"
}, {
  text: "Fennel Seeds",
  key: "fennel-seeds",
  value: "fennel-seeds"
}, {
  text: "Rice Wine",
  key: "rice-wine",
  value: "rice-wine"
}, {
  text: "Black Beans",
  key: "black-beans",
  value: "black-beans"
}, {
  text: "Lard",
  key: "lard",
  value: "lard"
}, {
  text: "Peppercorns",
  key: "peppercorns",
  value: "peppercorns"
}, {
  text: "Onion Powder",
  key: "onion-powder",
  value: "onion-powder"
}, {
  text: "Crab",
  key: "crab",
  value: "crab"
}, {
  text: "Diced Tomatoes",
  key: "diced-tomatoes",
  value: "diced-tomatoes"
}, {
  text: "Garlic Cloves",
  key: "garlic-cloves",
  value: "garlic-cloves"
}, {
  text: "Barbecue Sauce",
  key: "barbecue-sauce",
  value: "barbecue-sauce"
}, {
  text: "Ancho",
  key: "ancho",
  value: "ancho"
}, {
  text: "Chili Sauce",
  key: "chili-sauce",
  value: "chili-sauce"
}, {
  text: "Tomato Paste",
  key: "tomato-paste",
  value: "tomato-paste"
}, {
  text: "Canola Oil",
  key: "canola-oil",
  value: "canola-oil"
}, {
  text: "Lobster",
  key: "lobster",
  value: "lobster"
}, {
  text: "Allspice",
  key: "allspice",
  value: "allspice"
}, {
  text: "Seafood",
  key: "seafood",
  value: "seafood"
}, {
  text: "Grapes",
  key: "grapes",
  value: "grapes"
}, {
  text: "Coriander Seeds",
  key: "coriander-seeds",
  value: "coriander-seeds"
}, {
  text: "Brine",
  key: "brine",
  value: "brine"
}, {
  text: "Quinoa",
  key: "quinoa",
  value: "quinoa"
}, {
  text: "Sake",
  key: "sake",
  value: "sake"
}, {
  text: "Corn Flour",
  key: "corn-flour",
  value: "corn-flour"
}, {
  text: "Goat",
  key: "goat",
  value: "goat"
}, {
  text: "Liquor",
  key: "liquor",
  value: "liquor"
}, {
  text: "Frozen Peas",
  key: "frozen-peas",
  value: "frozen-peas"
}, {
  text: "Molasses",
  key: "molasses",
  value: "molasses"
}, {
  text: "Sourdough",
  key: "sourdough",
  value: "sourdough"
}, {
  text: "Brisket",
  key: "brisket",
  value: "brisket"
}, {
  text: "Bread Dough",
  key: "bread-dough",
  value: "bread-dough"
}, {
  text: "Bean Paste",
  key: "bean-paste",
  value: "bean-paste"
}, {
  text: "Sirloin",
  key: "sirloin",
  value: "sirloin"
}, {
  text: "Ramen",
  key: "ramen",
  value: "ramen"
}, {
  text: "Dried Fruit",
  key: "dried-fruit",
  value: "dried-fruit"
}, {
  text: "Crushed Garlic",
  key: "crushed-garlic",
  value: "crushed-garlic"
}, {
  text: "Asparagus",
  key: "asparagus",
  value: "asparagus"
}, {
  text: "Anchovies",
  key: "anchovies",
  value: "anchovies"
}, {
  text: "Guacamole",
  key: "guacamole",
  value: "guacamole"
}, {
  text: "White Flour",
  key: "white-flour",
  value: "white-flour"
}, {
  text: "Chorizo",
  key: "chorizo",
  value: "chorizo"
}, {
  text: "Cheese Sauce",
  key: "cheese-sauce",
  value: "cheese-sauce"
}, {
  text: "Flat Leaf Parsley",
  key: "flat-leaf-parsley",
  value: "flat-leaf-parsley"
}, {
  text: "White Bread",
  key: "white-bread",
  value: "white-bread"
}, {
  text: "Milk Chocolate",
  key: "milk-chocolate",
  value: "milk-chocolate"
}, {
  text: "Mutton",
  key: "mutton",
  value: "mutton"
}, {
  text: "Chard",
  key: "chard",
  value: "chard"
}, {
  text: "Pork Belly",
  key: "pork-belly",
  value: "pork-belly"
}, {
  text: "Chicken Wings",
  key: "chicken-wings",
  value: "chicken-wings"
}, {
  text: "Buffalo",
  key: "buffalo",
  value: "buffalo"
}, {
  text: "Basmati Rice",
  key: "basmati-rice",
  value: "basmati-rice"
}, {
  text: "Extra-virgin Olive Oil",
  key: "extra-virgin-olive-oil",
  value: "extra-virgin-olive-oil"
}, {
  text: "Sherry Vinegar",
  key: "sherry-vinegar",
  value: "sherry-vinegar"
}, {
  text: "Miso",
  key: "miso",
  value: "miso"
}, {
  text: "Roasted Garlic",
  key: "roasted-garlic",
  value: "roasted-garlic"
}, {
  text: "Sunflower Oil",
  key: "sunflower-oil",
  value: "sunflower-oil"
}, {
  text: "Ground Cumin",
  key: "ground-cumin",
  value: "ground-cumin"
}, {
  text: "Tartar Sauce",
  key: "tartar-sauce",
  value: "tartar-sauce"
}, {
  text: "Pretzels",
  key: "pretzels",
  value: "pretzels"
}, {
  text: "Apricots",
  key: "apricots",
  value: "apricots"
}, {
  text: "Marzipan",
  key: "marzipan",
  value: "marzipan"
}, {
  text: "Croissants",
  key: "croissants",
  value: "croissants"
}, {
  text: "Chipotle",
  key: "chipotle",
  value: "chipotle"
}, {
  text: "Beef Stock",
  key: "beef-stock",
  value: "beef-stock"
}, {
  text: "Dried Oregano",
  key: "dried-oregano",
  value: "dried-oregano"
}, {
  text: "Chicken Pieces",
  key: "chicken-pieces",
  value: "chicken-pieces"
}, {
  text: "Palm Sugar",
  key: "palm-sugar",
  value: "palm-sugar"
}, {
  text: "Dark Soy",
  key: "dark-soy",
  value: "dark-soy"
}, {
  text: "Tomato Ketchup",
  key: "tomato-ketchup",
  value: "tomato-ketchup"
}, {
  text: "Ranch Dressing",
  key: "ranch-dressing",
  value: "ranch-dressing"
}, {
  text: "Seaweed",
  key: "seaweed",
  value: "seaweed"
}, {
  text: "Gherkins",
  key: "gherkins",
  value: "gherkins"
}, {
  text: "Rabbit",
  key: "rabbit",
  value: "rabbit"
}, {
  text: "Squid",
  key: "squid",
  value: "squid"
}, {
  text: "Red Bell Pepper",
  key: "red-bell-pepper",
  value: "red-bell-pepper"
}, {
  text: "Kaffir Lime Leaves",
  key: "kaffir-lime-leaves",
  value: "kaffir-lime-leaves"
}, {
  text: "Lime Leaves",
  key: "lime-leaves",
  value: "lime-leaves"
}, {
  text: "Red Chili Powder",
  key: "red-chili-powder",
  value: "red-chili-powder"
}, {
  text: "Couscous",
  key: "couscous",
  value: "couscous"
}, {
  text: "Cacao Powder",
  key: "cacao-powder",
  value: "cacao-powder"
}, {
  text: "Macaroni",
  key: "macaroni",
  value: "macaroni"
}, {
  text: "Chiles",
  key: "chiles",
  value: "chiles"
}, {
  text: "Grapeseed Oil",
  key: "grapeseed-oil",
  value: "grapeseed-oil"
}, {
  text: "Grated Carrot",
  key: "grated-carrot",
  value: "grated-carrot"
}, {
  text: "Clams",
  key: "clams",
  value: "clams"
}, {
  text: "Cinnamon Sticks",
  key: "cinnamon-sticks",
  value: "cinnamon-sticks"
}, {
  text: "Vermicelli",
  key: "vermicelli",
  value: "vermicelli"
}, {
  text: "Heavy Whipping Cream",
  key: "heavy-whipping-cream",
  value: "heavy-whipping-cream"
}, {
  text: "Gremolata",
  key: "gremolata",
  value: "gremolata"
}, {
  text: "Bechamel",
  key: "bechamel",
  value: "bechamel"
}, {
  text: "Short Rib",
  key: "short-rib",
  value: "short-rib"
}, {
  text: "Rice Flour",
  key: "rice-flour",
  value: "rice-flour"
}, {
  text: "Tumeric",
  key: "tumeric",
  value: "tumeric"
}, {
  text: "Raspberry Jam",
  key: "raspberry-jam",
  value: "raspberry-jam"
}, {
  text: "Wild Mushrooms",
  key: "wild-mushrooms",
  value: "wild-mushrooms"
}, {
  text: "Vodka",
  key: "vodka",
  value: "vodka"
}, {
  text: "Dry Sherry",
  key: "dry-sherry",
  value: "dry-sherry"
}, {
  text: "Hot Chili",
  key: "hot-chili",
  value: "hot-chili"
}, {
  text: "Sweet Chili Sauce",
  key: "sweet-chili-sauce",
  value: "sweet-chili-sauce"
}, {
  text: "Seasoning Salt",
  key: "seasoning-salt",
  value: "seasoning-salt"
}, {
  text: "Beets",
  key: "beets",
  value: "beets"
}, {
  text: "Self Raising Flour",
  key: "self-raising-flour",
  value: "self-raising-flour"
}, {
  text: "Salami",
  key: "salami",
  value: "salami"
}]


const Search = () => (
  <div>
    <Dropdown
      clearable
      fluid
      multiple
      search
      selection
      options={ingredientOptions}
      placeholder='Type and select to add ingredients'
    />
  </div>

)

export default Search
