import Recipe from './Recipe'
import { Box, Image, Badge, Stack, Text, Divider } from "@chakra-ui/react";

const Recipes = ({ recipes, onFilter }) => {
  return (
    <>
      <Stack spacing={4} direction="row" padding="15px">
        {recipes.map((recipe) => (
          <Recipe key={recipe.Name} recipe={recipe} onFilter={onFilter} />
        ))}
      </Stack>
    </>
  );
};

export default Recipes;
