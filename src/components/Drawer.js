import {  Stack, useDisclosure, RadioGroup, Radio, Drawer, Button, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader } from "@chakra-ui/react";
import * as React from 'react';


export default function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("right")
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction="row" mb="4">
            <Radio value="top">Top</Radio>
            <Radio value="right">Right</Radio>
            <Radio value="bottom">Bottom</Radio>
            <Radio value="left">Left</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme="blue" onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }