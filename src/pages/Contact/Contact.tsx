import {
  Button,
  ContactItem,
  Layout,
  TextFormField,
  Typography,
} from '@components';
import useMessage from '@hooks/useMessage';
import useYupResolver from '@hooks/useYupResolver';
import { Localization } from '@locales/i18n';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { ContactType } from '@models/contact';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import { filter } from 'lodash';
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

  const user = useAppSelector((state: RootState) => state.userReducer.user);

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
    return filter(
      user?.contact,
      (contact) => contact.type !== ContactType.SOCIAL && contact.visible
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
                <Typography color='primary' variant='h6'>
                  {t(Localization.page7_title)}
                </Typography>
                <Box my={1} />
                <TextFormField
                  name='name'
                  label={t(Localization.page7_field1)}
                  multiline
                  maxRows={2}
                />
                <Box my={1} />
                <TextFormField
                  name='message'
                  label={t(Localization.page7_field2)}
                  multiline
                  rows={10}
                />
                <Box my={2} />
                <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                  {t(Localization.page7_button)}
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
