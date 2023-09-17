import { Box, Modal } from 'stories';

interface IProps {
  onClose: () => void;
  open: boolean;
  children?: React.ReactNode;
}

const OpenModalCatalog = ({ onClose, open }: IProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          width: 1000,
          height: 500,
          left: '15%',
          top: '13%',
          bgcolor: 'primary.main',
          p: 3,
          borderRadius: 2,
          border: '2px solid',
          borderColor: 'greyColor.main',
        }}
      >
        Домашняя страница
      </Box>
    </Modal>
  );
};

export default OpenModalCatalog;
