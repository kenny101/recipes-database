import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


import ThemeButton from './ThemeButton';

import { FaSun, FaMoon, FaSearch, FaGithub } from 'react-icons/fa';
import {
    Box, Image, Badge, Stack, Text, Divider, Button, Input, InputGroup, InputLeftElement, PhoneIcon, IconButton, Link,
} from "@chakra-ui/react";


const Navbar = () => {
    return (
        <>
            <Nav>
                <Button leftIcon={<FaSearch color="gray.100" />} colorScheme="gray" variant="outline" size="lg" width="100%" textAlign="left" textColor="gray.400" justifyContent="flex-start">
                    Click here to add Ingredients
                </Button>
                <NavBtn>
                    <ThemeButton />
                </NavBtn>
                <NavBtn>
                    <Link href="https://github.com/kenny101/recipes-database" isExternal>
                        <IconButton
                            colorScheme="gray"
                            variant="ghost"
                            aria-label="toggle dark mode"
                            size="lg"
                            padding="10px"
                            // margin="20px"
                            isRound="true"
                            icon={<FaGithub size={35} />}
                        />
                    </Link>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Navbar;