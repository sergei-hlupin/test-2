import { useEffect, useState } from 'react';
import { Typography, Stack, TextField, Box, Checkbox, FormControlLabel, FormGroup } from 'stories';
import { useAppSelector, useAppDispatch } from 'common/hooks/hook';
import { fetchGetShops } from 'services/shopsService';
import Shop from 'stories/Shop/Shop';
import { LeafletContainer } from 'stories/leaflet/LeafletContainer/LeafletContainer';
import { LeafletMap } from 'stories/leaflet/LeafletMap/LeafletMap';

const Shops: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [inNear, setInNear] = useState(false);
  const [inOpen, setInOpen] = useState(false);
  const data = useAppSelector((state) => state.shops.shops);
  const dispatch = useAppDispatch();

  let filterShops = data.filter((shop) => {
    if (searchValue) {
      return (
        shop.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        shop.streetAddress.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return shop;
  });

  if (inNear) {
    filterShops = filterShops.filter((shop) => shop.inNear === true);
  }
  if (inOpen) {
    filterShops = filterShops.filter((shop) => shop.inOpen === true);
  }

  useEffect(() => {
    dispatch(fetchGetShops());
  }, [dispatch]);

  return (
    <Box sx={{ width: 1360, margin: '0 auto' }}>
      <Typography variant='body2' sx={{ pt: 3, mb: 2 }}>
        Магазины в г. Санкт-Петербург
      </Typography>
      <Typography variant='h5' sx={{ fontWeight: 800, mb: 2 }}>
        Магазины в г. Санкт-Петербург
      </Typography>
      <Stack sx={{ bgcolor: 'primary.main', borderRadius: 3 }}>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TextField
            onChange={(e) => setSearchValue(e.target.value.trimStart())}
            value={searchValue}
            type='search'
            size='small'
            sx={{ width: 400, mr: 2, bgcolor: 'greyColor.light' }}
            placeholder='Введите название магазина или адрес'
          />
          <FormGroup sx={{ flexDirection: 'row' }}>
            <FormControlLabel
              sx={{ ml: '0', pr: 1, bgcolor: 'greyColor.light' }}
              label='Открыт сейчас'
              control={<Checkbox color='orange' checked={inOpen} onClick={() => setInOpen(() => !inOpen)} />}
            />
            <FormControlLabel
              sx={{ ml: '0', pr: 1, bgcolor: 'greyColor.light' }}
              label='Рядом'
              control={<Checkbox color='orange' checked={inNear} onClick={() => setInNear(() => !inNear)} />}
            />
            <FormControlLabel
              sx={{ ml: '0', pr: 1, bgcolor: 'greyColor.light' }}
              label='Магазины'
              control={<Checkbox color='orange' defaultChecked />}
            />
            <FormControlLabel
              sx={{ ml: '0', pr: 1, bgcolor: 'greyColor.light' }}
              label='Пункты выдачи'
              control={<Checkbox color='orange' />}
            />
          </FormGroup>
        </Box>
        <Stack direction='row' sx={{ height: 600 }}>
          <Stack sx={{ width: '50%', overflowY: 'scroll' }}>
            {filterShops.length > 0 ? (
              filterShops.map((shop) => <Shop key={shop.id} {...shop} />)
            ) : (
              <Typography sx={{ padding: 2 }} variant='h6'>
                По вашему запросу ничего не найдено, измените параметры запроса
              </Typography>
            )}
          </Stack>
          <Box sx={{ width: '50%' }}>
            <LeafletContainer>
              <LeafletMap shops={filterShops} />
            </LeafletContainer>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Shops;
