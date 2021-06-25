import { Box, Image, Badge, Stack, Text, Divider } from "@chakra-ui/react";


const Recipe = ({ recipe, onFilter }) => {
    return (
            <Box w='400px' rounded='10px' overflow='hidden'boxShadow='2xl' bg='gray.200' margin='10px 5px'>
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
        // bg:'gray200',
        // boxShadow:'xl'
    }
}

export default Recipe
