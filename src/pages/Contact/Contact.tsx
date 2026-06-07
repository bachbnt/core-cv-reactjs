/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import {
  AnimateIn,
  Button,
  ContactItem,
  Layout,
  TextFormField,
  Typography,
} from '@components';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { Box, Card, CardContent, Grid } from '@mui/material';
import { ContactType } from '@models/contact';
import { useSendMessage, useUserQuery } from '@queries';
import { useUiStore } from '@stores/uiStore';
import { zodResolver } from '@hookform/resolvers/zod';
import useThemeStyles from '@themes/styles';
import filter from 'lodash/filter';
import { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import { FormValues, contactSchema } from './validation';

const Contact = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({ page_name: 'page7_contact' });

  const sendMessage = useSendMessage();
  const showSpinner = useUiStore((state) => state.showSpinner);
  const hideSpinner = useUiStore((state) => state.hideSpinner);

  const { data: user } = useUserQuery();
  const { contact = [] } = user ?? {};

  const methods = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', message: '' },
  });
  const { handleSubmit, reset } = methods;

  const initialValue: FormValues = useMemo(() => {
    return { name: '', message: '' };
  }, []);

  useEffect(() => {
    reset(initialValue);
  }, [reset, initialValue]);

  const onSubmit = async (values: FormValues) => {
    trackEvent('component_clicked', {
      component_name: 'page7_button_send',
      form_values: JSON.stringify(values),
    });
    try {
      showSpinner();
      await sendMessage.mutateAsync(values);
      reset(initialValue);
    } finally {
      hideSpinner();
    }
  };

  const contacts = useMemo(() => {
    return filter(contact, (contact) => contact.type !== ContactType.SOCIAL);
  }, [contact]);

  return (
    <Layout>
      <Grid className={themeClasses.container} container size={{ xs: 12 }}>
        <Grid
          className={classes.contactContainer}
          container
          spacing={4}
          size={{ xs: 12, md: 6 }}
        >
          {contacts.map((item, index) => (
            <Grid key={item.id}>
              <AnimateIn delay={index * 80}>
                <ContactItem
                  item={item}
                  onItemClick={(item) =>
                    trackEvent('component_clicked', {
                      component_name: 'page7_list_contact',
                      item_name: item.id,
                    })
                  }
                />
              </AnimateIn>
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.messageContainer} size={{ xs: 12, md: 6 }}>
          <AnimateIn delay={200}>
            <Card className={classes.card}>
              <CardContent className={classes.center}>
                <FormProvider {...methods}>
                  <Typography color='primary' variant='h6'>
                    {t(Localization.page7_title)}
                  </Typography>
                  <Box sx={{ my: 1 }} />
                  <TextFormField
                    name='name'
                    label={t(Localization.page7_field1)}
                    multiline
                    maxRows={2}
                  />
                  <Box sx={{ my: 1 }} />
                  <TextFormField
                    name='message'
                    label={t(Localization.page7_field2)}
                    multiline
                    rows={10}
                  />
                  <Box sx={{ my: 2 }} />
                  <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                    {t(Localization.page7_button)}
                  </Button>
                  <Box sx={{ my: 2 }} />
                </FormProvider>
              </CardContent>
            </Card>
          </AnimateIn>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
