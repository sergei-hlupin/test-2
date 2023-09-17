import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MuiButton ref={ref} {...props} />;
});

Button.displayName = 'Button';
