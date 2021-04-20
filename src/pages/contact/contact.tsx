import { Grid } from '@material-ui/core';
import { MdHome, MdPhone, MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';
import ContactCard from '../../components/card/contactCard/contactCard';

const Contact = () => {
  const classes = useStyles();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);

  const contactIcons = [
    <MdHome className={clsx(classes.primary)} size={48} />,
    <MdPhone className={clsx(classes.primary)} size={48} />,
    <MdMail className={clsx(classes.primary)} size={48} />,
  ];

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container spacing={4}>
        {user?.contacts.map((item, index) => (
          <Grid item>
            <ContactCard item={item} icon={contactIcons[index]} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Contact;
