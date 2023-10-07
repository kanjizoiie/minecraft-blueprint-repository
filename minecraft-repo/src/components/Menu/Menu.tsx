import React from 'react';
import {
  IconButton,
  useDisclosure,
  VStack,
  useColorModeValue,
  Link as CHLink,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';

export default function MenuSlideout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Open Menu"
        icon={<MdMenu />}
        colorScheme="green"
        variant="solid"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <VStack w="500px" p="5" h="100%" backgroundColor={useColorModeValue('gray.100', 'gray.500')}>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              icon={<MdClose />}
              onClick={onClose}
            />
            <CHLink color="white" as={Link} to="/">
              Home
            </CHLink>
            <CHLink color="white" as={Link} to="/vehicles">
              Vehicles
            </CHLink>
            <CHLink color="white" as={Link} to="/zone">
              Zone
            </CHLink>
            <CHLink color="white" as={Link} to="/statistics">
              Statistics
            </CHLink>
            <CHLink color="white" onClick={() => { console.log('LOGOUT!'); }}>
              Logout
            </CHLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
