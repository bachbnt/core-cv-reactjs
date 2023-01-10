import {
  Button,
  ContactItem,
  Layout,
  TextFormField,
  Typography,
} from '@components';
import { Constant } from '@core/constants';
import { useMessage } from '@hooks/useMessage';
import { useYupResolver } from '@hooks/useYupResolver';
import { i18nKey } from '@locales/i18n';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { ContactType } from '@models/contact';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter, sortBy } from 'lodash';
import { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';
import { FormValues, validationSchema } from './validation';

const Contact = (props: Props) => {
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

  const contacts = useMemo(() => {
    return sortBy(
      filter(user?.contact, {
        type: ContactType.CONTACT,
        visible: true,
      }),
      Constant.SORT_KEY
    );
  }, [user?.contact]);

  return (
    <Layout>
      <Grid className={themeClasses.container} container xs={12} item>
        <Grid
          className={classes.contactContainer}
          container
          xs={12}
          md={6}
          spacing={4}
          item
        >
          {contacts.map((item) => (
            <Grid key={`${item.name} ${item.index}`} item>
              <ContactItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.messageContainer} xs={12} md={6} item>
          <Card className={classes.card}>
            <CardContent className={classes.center}>
              <FormProvider {...methods}>
                <Typography color="primary" variant="h6">
                  {t(i18nKey.leave_me_a_message)}
                </Typography>
                <Box my={1} />
                <TextFormField
                  name="name"
                  label={t(i18nKey.name)}
                  multiline
                  maxRows={2}
                />
                <Box my={1} />
                <TextFormField
                  name="message"
                  label={t(i18nKey.message)}
                  multiline
                  rows={10}
                />
                <Box my={2} />
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>
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