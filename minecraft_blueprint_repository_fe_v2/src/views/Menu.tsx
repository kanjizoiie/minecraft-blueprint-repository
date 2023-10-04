import React from 'react';

import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  IconButton,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { MdMenu, MdSchool } from 'react-icons/md';

import MenuSlideout from '../components/Menu/Menu';
import ColorMode from '../components/ColorMode/ColorMode';
import { AppMenu } from '../components/appmenu/AppMenu';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Flex h="100%" direction="column">
      <VStack
        zIndex="10"
        pos="fixed"
        left="20px"
        top="20px"
        spacing={4}
        align="stretch"
      >
        {/* 
        <AppMenu menuItems={
          [
            { color: "blue", inverted: true, header: true, name: "Feed", active: true, as: Link, to: "/feed" },
            { name: "Blocks", active: false, as: Link, to: "/blocks" },
            { name: "Blueprints", active: false, as: Link, to: "/blueprints" }
          ]
        } /> */}
        <IconButton
          isRound
          aria-label="Open Menu"
          variant="solid"
          colorScheme="green"
          size="lg"
          icon={<MdSchool />}
        />
        <IconButton
          isRound
          aria-label="Open Menu"
          variant="solid"
          colorScheme="green"
          size="lg"
          icon={<MdMenu />}
        />
      </VStack>

      <Flex
        pos="fixed"
        zIndex="10"
        p="10px"
        backgroundColor={useColorModeValue('gray.100', 'gray.500')}
        borderRadius="10px"
        dropShadow="dark-lg"
        right="20px"
        top="20px"
      >
        <Wrap>
          <WrapItem>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
              <AvatarBadge boxSize="1.25em" bg="yellow.500" />
            </Avatar>
          </WrapItem>
        </Wrap>
        <ColorMode />
      </Flex>
      <Outlet />
      <Flex
        bottom="20px"
        zIndex="10"
        pos="fixed"
        w="100%"
        justifyContent="center"
      >
        <Flex
          backgroundColor={useColorModeValue('gray.100', 'gray.500')}
          borderRadius="10px"
          justifyContent="space-between"
          p="10px"
          w="300px"
        >
          <MenuSlideout />
          <Button colorScheme="green" variant="solid">Starta tur!</Button>
          <IconButton
            aria-label="Open Menu"
            variant="solid"
            colorScheme="green"
            icon={<MdMenu />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
