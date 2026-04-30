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
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';

const Certificate = (props: Props) => {
  const themeClasses = useThemeStyles();
  const { trackEvent } = useTracker({ page_name: 'page9_certificate' });

  const { certificate = [] } =
    useAppSelector((state: RootState) => state.userReducer.user) || {};

  const { item, openDialog, onOpenDialog, onCloseDialog } =
    useDialog<CertificateModel>(certificate);

  return (
    <Layout>
      <Grid className={themeClasses.container} container>
        <Grid className={themeClasses.container} container spacing={4}>
          {certificate.map((cert, index) => (
            <Grid key={cert.id} item xs={12} md='auto'>
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
