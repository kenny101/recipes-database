import Recipe from './Recipe'
import { Box, Image, Badge, Stack, Text, Divider } from "@chakra-ui/react";

const Recipes = ({ recipes, onFilter }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <Recipe key={recipe.Name} recipe={recipe} onFilter={onFilter}/>
      ))}
    </>
  );
};

export default Recipes;
