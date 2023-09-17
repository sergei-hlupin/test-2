import { Toolbar as MuiToolbar, ToolbarProps } from '@mui/material';

export const Toolbar: React.FC<ToolbarProps> = (props) => {
    return <MuiToolbar {...props} />;
  };