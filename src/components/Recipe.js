import { Box, Image, Badge, Stack, Text, LinkOverlay } from "@chakra-ui/react";


const Recipe = ({ recipe }) => {
    return (
        <a href={recipe.Source} target="_blank" width='fit'>
            <Box w='fit' h='450px'rounded='10px' overflow='hidden' boxShadow='xl' bg='gray.200' margin='10px 5px' cursor="pointer">
                <Image src={recipe.Image} alt='card view link to a recipe' />
                <Box p={2}>
                    <Text as='b'>{recipe.Name}</Text>
                    <br></br>
                    <Text color='red.600' as='b'>Missing Ingredients:</Text>
                    <Box>
                        {recipe.Ingredients.split(',').map((ingredient) => (
                            <>
                                <text> </text>
                                <Badge colorScheme="messenger" textTransform='capitalize'>{ingredient}</Badge>
                            </>
                        ))}
                    </Box>
                </Box>
            </Box>
        </a>
    );
};


export default Recipe
