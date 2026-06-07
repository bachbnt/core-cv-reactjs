/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import {
  AnimateIn,
  CertificateDialog,
  CertificateItem,
  Layout,
} from '@components';
import useDialog from '@hooks/useDialog';
import useTracker from '@hooks/useTracker';
import { Certificate as CertificateModel } from '@models/certificate';
import { Grid } from '@mui/material';
import { useUserQuery } from '@queries';
import useThemeStyles from '@themes/styles';

const Certificate = () => {
  const themeClasses = useThemeStyles();
  const { trackEvent } = useTracker({ page_name: 'page9_certificate' });

  const { data: user } = useUserQuery();
  const { certificate = [] } = user ?? {};

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<CertificateModel>(certificate);

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={themeClasses.container} container spacing={4}>
          {certificate.map((cert, index) => (
            <Grid key={cert.id} size={{ xs: 12, md: 'auto' }}>
              <AnimateIn delay={index * 80}>
                <CertificateItem
                  item={cert}
                  onOpenDialog={() => {
                    trackEvent('component_clicked', {
                      component_name: 'page9_list_certificate',
                      item_name: cert.id,
                    });
                    onOpenDialog(cert);
                  }}
                />
              </AnimateIn>
            </Grid>
          ))}
        </Grid>
        {item && (
          <CertificateDialog
            item={item}
            openDialog={openDialog}
            onCloseDialog={onCloseDialog}
          />
        )}
      </Grid>
    </Layout>
  );
};

export default Certificate;
