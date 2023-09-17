import { useState } from 'react';
import { Box, AppBar, Toolbar, Stack, Typography, Button, Link } from 'stories';
import OpenModaltoBuyers from './OpenModaltoBuyers';
import { Arrow, Dot } from 'common/images';

const AppBarUp = () => {
  const [openBuyer, setOpenBuyer] = useState(false);
  const openModalBuyer = () => setOpenBuyer(true);
  const closeModalBuyer = () => setOpenBuyer(false);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Link to='/'>Санкт-Петербург</Link>
          <Stack spacing={3} direction='row' alignItems={'center'}>
            <Link to='/' display={'flex'} alignItems={'center'}>
              <Typography variant='body1' mr={'5px'}>
                Акции
              </Typography>
              <Dot width={6} height={6} />
            </Link>
            <Link to='/'>Магазины</Link>
            <Link component={Button} onClick={openModalBuyer} display={'flex'} alignItems={'center'} to=''>
              Покупателям
              <Arrow width={20} height={20} />
            </Link>
            <Link to='/'>Юридическим лицам</Link>
            <Link to='/'>Клуб DNS</Link>
          </Stack>
          <Box>
            <Link to='/'>8-800-77-07-999</Link>
            <Typography variant='caption' fontSize={'16px'}>
              (с 03:00 до 22:00)
            </Typography>
          </Box>
        </Box>
        <OpenModaltoBuyers open={openBuyer} onClose={closeModalBuyer} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarUp;
