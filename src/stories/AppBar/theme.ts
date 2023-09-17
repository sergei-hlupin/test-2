import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const AppBarTheme: ComponentsOverrides['MuiAppBar'] = {};

export default AppBarTheme;
