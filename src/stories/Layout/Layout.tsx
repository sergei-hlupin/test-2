import { Outlet } from 'react-router-dom';
import Header from 'stories/Header/Header';
import { Box } from 'stories';

const Layout = () => {
  return (
    <>
      <Header />
      <Box bgcolor='greyColor.light'>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
