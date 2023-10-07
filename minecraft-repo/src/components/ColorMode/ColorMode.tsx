import React from 'react';
import {
  useColorMode, HStack, Box, Switch,
} from '@chakra-ui/react';

function ColorMode() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <HStack>
      <Box>
        {colorMode === 'dark' ? '🌙' : '☀️'}
      </Box>
      <Switch
        defaultChecked={colorMode === 'dark'}
        onChange={(value: { target: { checked: any; }; }) => { setColorMode(value.target.checked ? 'dark' : 'light'); }}
      />
    </HStack>
  );
}

export default ColorMode;
