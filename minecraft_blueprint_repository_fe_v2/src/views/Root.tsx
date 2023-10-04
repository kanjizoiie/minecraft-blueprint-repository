import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import theme from '../theme';

interface RootProps {

}

export default function Root({ }: RootProps) {
  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}
