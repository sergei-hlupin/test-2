import { createTheme } from '@mui/material';
import { orange, blue, grey } from '@mui/material/colors';
import { components } from './components';

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
    greyColor: Palette['primary'];
    blueColor: Palette['primary'];
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    greyColor?: PaletteOptions['primary'];
    blueColor?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    orange?: string;
  }

  interface SimplePaletteColorOptions {
    orange?: string;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    orange: true;
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
    blueColor: {
      main: blue[400],
    },
    greyColor: {
      main: grey[300],
      light: grey[100],
    },
  },
  typography: {},
  components,
});
