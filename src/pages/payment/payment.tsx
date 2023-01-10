import { Layout, PaymentItem } from '@components';
import { Constant } from '@core/constants';
import { Grid } from '@material-ui/core';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import useStyles from './styles';

const Payment = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const payments = useMemo(() => {
    return sortBy(filter(user?.payment, { visible: true }), Constant.SORT_KEY);
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
