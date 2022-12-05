import { theme } from '@chakra-ui/react';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xl': '1.5rem',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      700: '#B3B3B3',
    },
    blue: {
      100: '#EBF8FF',
      200: '#BEE3F8',
      300: '#90CDF4',
      400: '#63B3ED',
      500: '#1275E9',
      600: '#0f5ed6',
      700: '#0b4ab3',
    },
    primary: {
      50: '#f5f5f5',
      100: '#e8e8e8',
      200: '#d1d1d1',
      300: '#b9b9b9',
      400: '#8c8c8c',
      500: '#5e5e5e',
      600: '#565656',
      700: '#3d3d3d',
      800: '#2e2e2e',
      900: '#1c1c1c',
    },
  },
};

export default customTheme;
