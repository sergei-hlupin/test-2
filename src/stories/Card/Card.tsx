import { Card as MuiCard, CardProps } from '@mui/material';

export const Card: React.FC<CardProps> = (props) => {
  return <MuiCard {...props} />;
};
