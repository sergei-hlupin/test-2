import { Modal as MuiModal, ModalProps } from '@mui/material';

export const Modal: React.FC<ModalProps> = (props) => {
  return <MuiModal {...props} />;
};
