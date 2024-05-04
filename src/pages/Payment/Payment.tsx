import { Layout, PaymentDialog, PaymentItem } from '@components';
import useDialog from '@hooks/useDialog';
import useTracker from '@hooks/useTracker';
import { Grid } from '@material-ui/core';
import { Payment as PaymentModel } from '@models/payment';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';

const Payment = (props: Props) => {
  const themeClasses = useThemeStyles();
  const { trackEvent } = useTracker({ page_name: 'page8_payment' });

  const { payment = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<PaymentModel>(payment);

  const onCopyClick = async (item: PaymentModel) => {
    trackEvent('component_clicked', {
      component_name: 'page8_list_payment',
      item_name: `${item.id}_copy`,
    });
    const value = item.account;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  const onCopyAllClick = async (item: PaymentModel) => {
    trackEvent('component_clicked', {
      component_name: 'page8_list_payment',
      item_name: `${item.id}_copy_all`,
    });
    const value = `${item.name}\n${item.account}\n${item.user}`;
    await navigator.clipboard.writeText(value);
    alert(`Copied\n${value}`);
  };

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}>
        {payment.map((item) => (
          <Grid key={item.id} item>
            <PaymentItem
              item={item}
              onItemClick={(item) =>
                trackEvent('component_clicked', {
                  component_name: 'page8_list_payment',
                  item_name: item.id,
                })
              }
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
