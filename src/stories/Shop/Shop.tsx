import { Typography, Link, Stack, Button, Tooltip, Card, CardContent } from 'stories';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

interface IShop {
  name: string;
  streetAddress: string;
  description: string;
}

const Shop: React.FC<IShop> = ({ streetAddress, name, description }) => {
  return (
    <Card sx={{ overflow: 'visible' }} variant='outlined'>
      <CardContent>
        <Stack direction={'row'}>
          <Link color={'blueColor.main'} to='/' gutterBottom>
            <Typography mr={1} variant={'body1'}>
              {name}
            </Typography>
          </Link>
          <Tooltip
            title={
              <Stack p={1}>
                <Typography mb={1} variant={'body2'}>
                  {description}
                </Typography>
                <Button
                  color='inherit'
                  variant='outlined'
                  sx={{ borderColor: 'greyColor.main', textTransform: 'capitalize', width: '100px' }}
                >
                  <Typography variant={'caption'}>Подробнее</Typography>
                </Button>
              </Stack>
            }
          >
            <DescriptionOutlinedIcon sx={{ color: 'greyColor.main', cursor: 'pointer' }} />
          </Tooltip>
        </Stack>
        <Typography gutterBottom variant={'body2'}>
          {description}
        </Typography>
        <Typography variant={'body2'}>{streetAddress}</Typography>
      </CardContent>
    </Card>
  );
};

export default Shop;
