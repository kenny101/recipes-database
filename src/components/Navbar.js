import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { Box, Image, Badge, Stack, Text, Divider, Button, Input, InputGroup, InputLeftElement, PhoneIcon } from "@chakra-ui/react";


const Navbar = () => {
    return (
        <>
            <Nav>
                <Button leftIcon={<FaSearch color="gray.100" />} colorScheme="gray" variant="outline" size="lg"   width="100%" textAlign="left" textColor="gray.400" justifyContent="flex-start">
                    Click here to add Ingredients
                </Button>
                <NavBtn>
                    <Button colorScheme="grey" h={'4em'} w={'4em'} colorScheme="gray" variant="ghost" ><FaSun color="#A0AEC0" size={50} /></Button>
                    {/* <Button colorScheme="grey" h={'4em'} w={'4em'} variant="ghost"><FaMoon size={30} /></Button> */}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;