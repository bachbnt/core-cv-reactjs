import { Button, IconButton, Typography } from '@components';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
} from '@material-ui/core';
import { Payment } from '@models/payment';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import clsx from 'clsx';
import { useState } from 'react';
import { IoCopy } from 'react-icons/io5';
import Props from './props';
import useStyles from './styles';

const PaymentItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  const config = useAppSelector(
    (state: RootState) => state.configReducer.config
  );

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const onCopyClick = async (item: Payment) => {
    const value = item.account;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  const onCopyAllClick = async (item: Payment) => {
    const value = `${item.name}\n${item.account}\n${item.user}`;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  return item.visible ? (
    <div>
      <Card className={clsx(classes.card, themeClasses.card)}>
        <CardActionArea>
          <CardContent className={themeClasses.cardContent}>
            {item.nameVisible && item.accountVisible && (
              <IconButton
                className={clsx(classes.copyAllButton)}
                onClick={() => {
                  onCopyAllClick(item);
                }}
              >
                <IoCopy color='primary' />
              </IconButton>
            )}
            {item.nameVisible && (
              <Typography color='primary' variant='h6' align='center'>
                {item.name}
              </Typography>
            )}
            {item.accountVisible && (
              <Box
                overflow='hidden'
                display='flex'
                flexDirection='row'
                alignItems='center'
                mb={1}
              >
                <Button
                  className={clsx(themeClasses.cardDescription, classes.button)}
                  startIcon={<IoCopy />}
                  onClick={() => {
                    onCopyClick(item);
                  }}
                >
                  {item.account}
                </Button>
              </Box>
            )}
            {item.qrCodeVisible && (
              <CardMedia
                className={classes.img}
                component='img'
                image={item.qrCode}
                onClick={onOpenDialog}
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog maxWidth='md' open={openDialog} onClose={onCloseDialog}>
        {item.qrCodeVisible && (
          <CardMedia
            component='img'
            image={item.qrCode || config?.image?.comingSoon}
          />
        )}
      </Dialog>
    </div>
  ) : (
    <div />
  );
};

export default PaymentItem;
