import { useState } from 'react';
import { Box, AppBar, Toolbar, Stack, Typography, Button, TextField, Link, Backdrop } from 'stories';

import { Compare, Arrow, Wishlist, Basket, UserProfile } from 'common/images';
import OpenModalCatalog from './OpenModalCatalog';

const AppBarBottom = () => {
  const [searchText, setSearchText] = useState('');
  const [openCatalog, setOpenCatalog] = useState(false);
  const openModalCatalog = () => setOpenCatalog(true);
  const closeModalCatalog = () => setOpenCatalog(false);
  const [onBackdrop, setOnBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOnBackdrop(false);
  };
  const handleOpenBackdrop = () => {
    setOnBackdrop(true);
  };

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box
          flex={1.5}
          bgcolor='orange.main'
          height={'64px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={3}
          p={2}
        >
          <Link p={2} component={Button} to='/'>
            <Typography variant='h5' color={'primary.main'} fontWeight={700}>
              DNS
            </Typography>
          </Link>
          <Button
            onClick={openModalCatalog}
            sx={{ display: 'flex', alignItems: 'center', padding: 1, bgcolor: 'orange.light' }}
            variant='text'
          >
            <Typography variant='body2'>Каталог</Typography>
            <Arrow width={24} height={24} />
          </Button>
        </Box>
        <Box flex={5} component='form' ml={3} mr={2} onClick={handleOpenBackdrop}>
          <TextField
            sx={{
              zIndex: 11,
              background: '#f6f6f6',
            }}
            fullWidth
            type='search'
            placeholder='Поиск по сайту'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value.trimStart());
            }}
          />
        </Box>
        <Backdrop open={onBackdrop} onClick={handleCloseBackdrop} sx={{ zIndex: 10 }} />
        <Stack direction={'row'}>
          <Link to='/' display={'flex'} flexDirection={'column'} alignItems={'center'} ml={3}>
            <Compare width={22} height={22} />
            <Typography variant='caption' mt={1}>
              Сравнение
            </Typography>
          </Link>
          <Link to='/' display={'flex'} flexDirection={'column'} alignItems={'center'} ml={3}>
            <Wishlist width={22} height={22} />
            <Typography variant='caption' mt={1}>
              Избранное
            </Typography>
          </Link>
          <Link to='/' display={'flex'} flexDirection={'column'} alignItems={'center'} ml={3}>
            <Basket width={22} height={22} />
            <Typography variant='caption' mt={1}>
              Корзина
            </Typography>
          </Link>
          <Link to='/' display={'flex'} flexDirection={'column'} alignItems={'center'} ml={3}>
            <UserProfile width={22} height={22} />
            <Typography color={'black'} variant='caption' mt={1}>
              Войти
            </Typography>
          </Link>
        </Stack>
        <OpenModalCatalog open={openCatalog} onClose={closeModalCatalog} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBottom;
