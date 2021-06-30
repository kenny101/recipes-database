import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import SearchModal from './SearchModal';

import ThemeButton from './ThemeButton';

import { FaSun, FaMoon, FaSearch, FaGithub } from 'react-icons/fa';
import {
    Box, Image, Badge, Stack, Text, Divider, Button, Input, InputGroup, InputLeftElement, PhoneIcon, IconButton, Link,
} from "@chakra-ui/react";


const Navbar = () => {
    return (
        <>
            <Nav>
                <SearchModal/>
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