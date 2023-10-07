import React from 'react';

import {
  Flex,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Menu() {
  return (
    <Flex h="100%" direction="column">
      <Outlet />
    </Flex>
  );
}
