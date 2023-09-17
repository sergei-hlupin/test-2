import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const TextFieldTheme: ComponentsOverrides['MuiTextField'] = {
  styleOverrides: {
    root: {},
  },
};

export default TextFieldTheme;
