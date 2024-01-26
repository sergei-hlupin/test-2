import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return <MuiTooltip {...props} />;
};
