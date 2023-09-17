import { Backdrop as MuiBackdrop, BackdropProps } from '@mui/material';

export const Backdrop: React.FC<BackdropProps> = (props) => {
  return <MuiBackdrop {...props} />;
};
