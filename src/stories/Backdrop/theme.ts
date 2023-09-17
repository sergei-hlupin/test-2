import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const BackdropTheme: ComponentsOverrides['MuiBackdrop'] = {
  styleOverrides: {
    root: {
      background: 'rgba(0, 0, 0, 0.1);',
    },
  },
};

export default BackdropTheme;
