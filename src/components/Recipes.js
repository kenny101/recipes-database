import Recipe from './Recipe'
import { Box, Image, Badge, Stack, Text, Divider, Container, Grid } from "@chakra-ui/react";
import { useEffect, useState } from 'react';


const Recipes = ({ recipes, onFilter }) => {
  return (
    <>
      <div style={styles.recipe_container}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.Name} recipe={recipe} onFilter={onFilter} />
        ))}
      </div>
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
    // grid-auto-flow: 'dense',
    // gap: '5px',
  }
}

export default Recipes;
