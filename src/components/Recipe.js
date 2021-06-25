import { Box, Image, Badge, Stack, Text, Divider } from "@chakra-ui/react";


const Recipe = ({ recipe, onFilter }) => {
    return (
        <div className="recipe">
            <Box w='400px' rounded='10px' overflow='hidden' boxShadow='2xl' bg='gray.200'>
                <Image src={recipe.Image} alt='card view link to a recipe' />
                <Box p={2}>
                    <Text as='b'>{recipe.Name}</Text>
                    {/* <Divider orientation="horizontal" borderColor="grey" borderRadius='10px' border="2px" opacity='0.2' /> */}
                    <hr></hr>
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
        </div>
    );
};

export default Recipe
