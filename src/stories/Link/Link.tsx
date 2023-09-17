import { LinkProps, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

export const Link = (props: LinkRouterProps) => {
  return <MuiLink {...props} sx={{ '&:hover': { color: 'orange.main' } }} component={RouterLink} />;
};
