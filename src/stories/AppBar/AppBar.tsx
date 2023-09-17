import { AppBar as MuiAppBar, AppBarProps } from '@mui/material';

export const AppBar = (props: AppBarProps) => {
  return <MuiAppBar elevation={0} {...props} />;
};
