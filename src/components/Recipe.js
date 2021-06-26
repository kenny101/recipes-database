import { Box, Image, Badge, Stack, Text, LinkOverlay } from "@chakra-ui/react";


const Recipe = ({ recipe, onFilter }) => {
    return (
        <a href={recipe.Source} target="_blank" width='fit'>
            <Box w='fit' rounded='10px' overflow='hidden' boxShadow='2xl' bg='gray.200' margin='10px 5px' cursor="pointer">
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



const styles = {
    box_container: {
        // w:'400px',
        // rounded:'10px',
        // overflow:'hidden',
        // boxShadow:'2xl',
        // bg:'gray.200', 
        // margin:'10px 5px',
        // bg:'gray200', // boxShadow:'xl'
    }
}

export default Recipe
