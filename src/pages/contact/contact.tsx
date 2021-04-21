import { Grid } from '@material-ui/core';
import { MdHome, MdPhone, MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';
import ContactCard from '../../components/card/contactCard/contactCard';
import { i18nKey } from '../../locales/i18n';

const Contact = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  const contacts = [
    {
      icon: <MdHome className={clsx(classes.primary)} size={48} />,
      title: i18nKey.address,
    },
    {
      icon: <MdPhone className={clsx(classes.primary)} size={48} />,
      title: i18nKey.phone,
    },
    {
      icon: <MdMail className={clsx(classes.primary)} size={48} />,
      title: i18nKey.email,
    },
  ];

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
        {user?.contacts.map((item, index) => (
          <Grid item>
            <ContactCard
              item={item}
              icon={contacts[index].icon}
              title={contacts[index].title}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Contact;
