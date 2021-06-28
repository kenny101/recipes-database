import React, { Component, useState } from 'react'

import { IconButton, Button, DarkMode } from "@chakra-ui/react";

import { FaSun, FaMoon, FaSearch, FaGithub } from 'react-icons/fa';


function ThemeButton() {
    const lightTheme = <FaMoon size={30} />;
    const darkTheme = <FaSun size={30} />;
    const [isLight, setTheme] = useState(true);

    function toggleTheme() {
        setTheme(isLight => !isLight);
    }

    return (
        <IconButton
            onClick={toggleTheme}
            colorScheme="gray"
            variant="ghost"
            aria-label="toggle dark mode"
            size="lg"
            padding="12px"
            isRound="true"
            icon={isLight ? lightTheme : darkTheme}
        />
    );
}

export default ThemeButton
