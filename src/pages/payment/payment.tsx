import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { Layout, PaymentItem } from 'src/components';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Payment = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const user = useAppSelector((state: any) => state.userReducer.user);

  return (
    <Layout>
      <Grid className={clsx(themeClasses.container)} container spacing={4}>
        {_.sortBy(_.filter(user?.payment, { visible: true }), 'index').map(
          (item) => (
            <Grid key={`${item.name} ${item.index}`} item>
              <PaymentItem item={item} />
            </Grid>
          )
        )}
      </Grid>
    </Layout>
  );
};

export default Payment;
