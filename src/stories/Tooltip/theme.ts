import { ThemeOptions } from '@mui/material';

type ComponentsOverrides = NonNullable<ThemeOptions['components']>;

const TooltipTheme: ComponentsOverrides['MuiTooltip'] = {
  styleOverrides: {
    tooltip: {
      background: 'white',
      color: 'inherit',
      border: '1px solid #dadde9',
    },
  },
};

export default TooltipTheme;
