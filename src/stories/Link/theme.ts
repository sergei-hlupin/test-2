import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const LinkTheme: ComponentsOverrides['MuiLink'] = {
  defaultProps: {
    underline: 'none',
    color: 'inherit',
  },
};

export default LinkTheme;
