import { Box, Card, CardContent, Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ContactItem,
  Layout,
  TextFormField,
  Typography,
} from 'src/components';
import { useMessage } from 'src/hooks/useMessage';
import { useYupResolver } from 'src/hooks/useYupResolver';
import { i18nKey } from 'src/locales/i18n';
import { ContactType } from 'src/models/contact';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';
import { FormValues, validationSchema } from './validation';

const Contact = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const { postData } = useMessage();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

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
      <Grid className={clsx(themeClasses.container)} container xs={12} item>
        <Grid
          className={clsx(classes.contactContainer)}
          container
          xs={12}
          md={6}
          spacing={4}
          item
        >
          {_.sortBy(
            _.filter(user?.contact, {
              type: ContactType.CONTACT,
              visible: true,
            }),
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
                <Typography color='primary' variant='h6'>
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
                <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                  {t(i18nKey.send)}
                </Button>
                <Box my={2} />
              </FormProvider>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
