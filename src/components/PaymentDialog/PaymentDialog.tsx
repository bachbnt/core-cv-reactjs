import { CardMedia, Dialog } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';
import useStyles from './styles';

const PaymentDialog = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item, openDialog, onCloseDialog } = props;

  const config = useAppSelector(
    (state: RootState) => state.configReducer.config
  );

  return item.visible ? (
    <Dialog
      key={item.id}
      maxWidth='md'
      open={openDialog}
      onClose={onCloseDialog}
    >
      {item.qrCodeVisible && (
        <CardMedia
          component='img'
          image={item.qrCode || config?.image?.comingSoon}
        />
      )}
    </Dialog>
  ) : null;
};

export default PaymentDialog;
