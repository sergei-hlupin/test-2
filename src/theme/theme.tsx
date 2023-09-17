import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { components } from './components';

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    greyColor: Palette['primary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    greyColor?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    orange: {
      main: orange[500],
      light: orange[400],
    },
    greyColor: {
      main: '#f6f6f6',
    },
  },
  typography: {},
  components,
});

// Adding color tokens
// interface PaletteColor {
//   orange?: string;
// }

// interface SimplePaletteColorOptions {
//   orange?: string;
// }
// declare module '@mui/material/Box' {
//   interface BoxPropsColorOverrides {
//     orange: true;
//   }
// }
// {
