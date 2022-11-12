import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import clsx from 'clsx';
import { IoCopy } from 'react-icons/io5';
import { Button, Typography } from 'src/components';
import { Payment } from 'src/models/payment';
import useThemeStyles from 'src/themes/styles';
import Props from './props';
import useStyles from './styles';

const PaymentItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;

  const onCopyClick = async (item: Payment) => {
    await navigator.clipboard.writeText(
      `${item.name}\n${item.account}\n${item.user}`
    );
    alert('Copied');
  };

  return item.visible ? (
    <MuiCard className={clsx(classes.card, themeClasses.card)}>
      <CardActionArea>
        <CardContent className={themeClasses.cardContent}>
          {item.nameVisible && (
            <Typography color='primary' variant='h6' align='center'>
              {item.name}
            </Typography>
          )}
          {item.accountVisible && (
            <Box
              mb={2}
              overflow='hidden'
              display='flex'
              flexDirection='row'
              alignItems='center'
            >
              <Button
                className={themeClasses.cardDescription}
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
            <img className={clsx(classes.img)} src={item.qrCode} alt='qrcode' />
          )}
        </CardContent>
      </CardActionArea>
    </MuiCard>
  ) : (
    <div />
  );
};

export default PaymentItem;
