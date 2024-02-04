import { Layout, PaymentDialog, PaymentItem } from '@components';
import useDialog from '@hooks/useDialog';
import { Grid } from '@material-ui/core';
import { Payment as PaymentModel } from '@models/payment';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
import { useMemo } from 'react';
import Props from './props';
import useStyles from './styles';

const Payment = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const payments = useMemo(() => {
    return filter(user?.payment, { visible: true });
  }, [user?.payment]);

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<PaymentModel>(payments);

  const onCopyClick = async (item: PaymentModel) => {
    const value = item.account;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  const onCopyAllClick = async (item: PaymentModel) => {
    const value = `${item.name}\n${item.account}\n${item.user}`;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}>
        {payments.map((item) => (
          <Grid key={item.id} item>
            <PaymentItem
              item={item}
              onCopyClick={onCopyClick}
              onCopyAllClick={onCopyAllClick}
              onOpenDialog={() => onOpenDialog(item)}
            />
          </Grid>
        ))}
        {item && (
          <PaymentDialog
            item={item}
            openDialog={openDialog}
            onCloseDialog={onCloseDialog}
          />
        )}
      </Grid>
    </Layout>
  );
};

export default Payment;
