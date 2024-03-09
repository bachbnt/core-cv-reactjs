import { CardMedia, Dialog } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import Props from './props';

const PaymentDialog = (props: Props) => {
  const { item, openDialog, onCloseDialog } = props;

  const { image } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};

  return item.visible ? (
    <Dialog
      key={item.id}
      maxWidth='md'
      open={openDialog}
      onClose={onCloseDialog}
    >
      {item.qrCodeVisible && (
        <CardMedia component='img' image={item.qrCode || image?.comingSoon} />
      )}
    </Dialog>
  ) : null;
};

export default PaymentDialog;
