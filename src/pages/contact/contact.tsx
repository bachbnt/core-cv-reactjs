import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { MdHome, MdPhone, MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Layout from '../../components/layout/layout';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';
import useStyles from './styles';
import ContactCard from '../../components/card/contactCard/contactCard';
import { i18nKey } from '../../locales/i18n';
import ContainedButton from '../../components/button/containedButton/containedButton';
import Typography from '../../components/typography/typography';
import useYupResolver from '../../hooks/useYupResolver';
import { FormProvider, useForm } from 'react-hook-form';
import { validationSchema, FormValues } from './validation';
import { useEffect, useMemo } from 'react';
import FormTextField from '../../components/textField/formTextField/formTextField';
import { useMessage } from '../../hooks/useMessage';

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);
  const { postData } = useMessage();

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

  const resolver = useYupResolver(validationSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  const initialValue: FormValues = useMemo(() => {
    return { name: '', message: '' };
  }, []);

  useEffect(() => {
    reset(initialValue);
  }, [reset, initialValue]);

  const onSubmit = async (values: FormValues) => {
    await postData(values.name, values.message);
    reset(initialValue);
  };

  return (
    <Layout>
      <Grid className={clsx(classes.container)} container xs={12}>
        <Grid
          className={clsx(classes.contactContainer)}
          container
          xs={12}
          md={6}
          spacing={4}>
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
        <Grid
          className={clsx(classes.messageContainer)}
          container
          xs={12}
          md={6}>
          <Card className={clsx(classes.card)}>
            <CardContent className={clsx(classes.center)}>
              <FormProvider {...methods}>
                <Typography classes={{ root: classes.primary }} variant='h6'>
                  {t(i18nKey.leave_me_a_message)}
                </Typography>
                <Box my={1} />
                <FormTextField
                  name='name'
                  label={t(i18nKey.name)}
                  multiline
                  rowsMax={2}
                />
                <Box my={1} />
                <FormTextField
                  name='message'
                  label={t(i18nKey.message)}
                  multiline
                  rows={10}
                />
                <Box my={2} />
                <ContainedButton onClick={handleSubmit(onSubmit)}>
                  {t(i18nKey.send)}
                </ContainedButton>
              </FormProvider>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
