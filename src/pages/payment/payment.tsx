import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import { filter, sortBy } from 'lodash';
import { useMemo } from 'react';
import { Layout, PaymentItem } from 'src/components';
import { Constant } from 'src/core/constants';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
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
      <Grid className={clsx(themeClasses.container)} container spacing={4}>
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
