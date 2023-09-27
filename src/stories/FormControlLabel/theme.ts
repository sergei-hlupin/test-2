import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const FormControlLabelTheme: ComponentsOverrides['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      borderRadius: '10px',
    },
  },
};

export default FormControlLabelTheme;
