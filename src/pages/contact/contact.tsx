import { useEffect, useMemo } from 'react';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import clsx from 'clsx';
import _ from 'lodash';
import ContainedButton from 'src/components/button/containedButton/containedButton';
import ContactItem from 'src/components/contactItem/contactItem';
import Layout from 'src/components/layout/layout';
import TextFormField from 'src/components/textField/textFormField/textFormField';
import Typography from 'src/components/typography/typography';
import { useMessage } from 'src/hooks/useMessage';
import { useYupResolver } from 'src/hooks/useYupResolver';
import { i18nKey } from 'src/locales/i18n';
import { ContactType } from 'src/models/contact';
import { useAppSelector } from 'src/redux/store';
import { validationSchema, FormValues } from './validation';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.userReducer.user);
  const { postData } = useMessage();

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
      <Grid className={clsx(classes.container)} container xs={12} item>
        <Grid
          className={clsx(classes.contactContainer)}
          container
          xs={12}
          md={6}
          spacing={4}
          item
        >
          {_.sortBy(
            _.filter(user?.contact, { type: ContactType.CONTACT }),
            'index'
          ).map((item) => (
            <Grid key={`${item.name} ${item.index}`} item>
              <ContactItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid
          className={clsx(classes.messageContainer)}
          container
          xs={12}
          md={6}
          item
        >
          <Card className={clsx(classes.card)}>
            <CardContent className={clsx(classes.center)}>
              <FormProvider {...methods}>
                <Typography classes={{ root: classes.primary }} variant='h6'>
                  {t(i18nKey.leave_me_a_message)}
                </Typography>
                <Box my={1} />
                <TextFormField
                  name='name'
                  label={t(i18nKey.name)}
                  multiline
                  maxRows={2}
                />
                <Box my={1} />
                <TextFormField
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
