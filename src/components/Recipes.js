import Recipe from './Recipe'
import { Box, Image, Badge, Stack, Text, Divider, Container, Grid } from "@chakra-ui/react";

const Recipes = ({ recipes, onFilter }) => {
  return (
    <>
      <Stack style={styles.recipe_container}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.Name} recipe={recipe} onFilter={onFilter} />
        ))}
      </Stack>
    </>
  );
};

const styles = {
  recipe_container: {
    margin: "0",
    padding: "0",
    display: 'grid',
    direction: "row",
    justifyContent: "center",
    gridTemplateColumns: 'repeat(auto-fill, 415px)',
  }
}

export default Recipes;
