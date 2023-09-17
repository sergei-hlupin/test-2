import { Box, Modal, Link } from 'stories';

interface IProps {
  onClose: () => void;
  open: boolean;
}

const OpenModaltoBuyers = ({ onClose, open }: IProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          left: '38%',
          top: '6%',
          bgcolor: 'primary.main',
          p: 3,
          borderRadius: 2,
          border: '2px solid',
          borderColor: 'greyColor.main',
        }}
      >
        <Link to='/'>Достава</Link>
        <Link to='/'>Бонусная программа</Link>
        <Link to='/'>Узнать статус заказа</Link>
        <Link to='/'>Обмен, возврат, гарантия</Link>
        <Link to='/'>Кредиты</Link>
        <Link to='/'>Сервисные центры</Link>
      </Box>
    </Modal>
  );
};

export default OpenModaltoBuyers;
