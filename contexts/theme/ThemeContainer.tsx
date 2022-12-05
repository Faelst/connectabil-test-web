import React from 'react';

import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/react';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import customTheme from '../../styles/theme';

const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <EmotionProvider theme={customTheme}>
          <CSSReset />
          {children}
        </EmotionProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
