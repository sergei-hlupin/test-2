import { Box } from 'stories';

import AppBarUp from './components/AppBarUp';
import AppBarBottom from './components/AppBarBottom';

const Header = () => {
  return (
    <Box color='primary.main' pb={3}>
      <Box sx={{ width: 1360, margin: '0 auto' }}>
        <AppBarUp />
        <AppBarBottom />
      </Box>
    </Box>
  );
};

export default Header;
