/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { CardMedia, Dialog } from '@mui/material';
import { useConfigQuery } from '@queries';
import Props from './props';

const PaymentDialog = (props: Props) => {
  const { item, openDialog, onCloseDialog } = props;

  const { data: config } = useConfigQuery();
  const image = config?.image;

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
          image={item.qrCode || image?.comingSoon}
          loading='lazy'
        />
      )}
    </Dialog>
  ) : null;
};

export default PaymentDialog;
