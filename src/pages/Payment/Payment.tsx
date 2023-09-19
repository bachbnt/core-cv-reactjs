import { Layout, PaymentItem } from '@components';
import { Grid } from '@material-ui/core';
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

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}>
        {payments.map((item) => (
          <Grid key={`${item.name} ${item.index}`} item>
            <PaymentItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Payment;
