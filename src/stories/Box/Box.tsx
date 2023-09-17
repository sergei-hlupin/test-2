import React from 'react';
import { Box as MuiBox, BoxProps } from '@mui/material';

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <MuiBox ref={ref} {...props} />;
});

Box.displayName = 'Box';
