/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton, Spinner, Typography } from '@components';
import { Localization } from '@locales/i18n';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { MdClose } from 'react-icons/md';
import CvPdfDocument from './CvPdfDocument';
import Props from './props';
import useStyles from './styles';

const CvPreviewDialog = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  const { cv, open, onClose } = props;

  const downloadLabel = String(t(Localization.cv_dialog_download));
  const preparingLabel = String(t(Localization.cv_dialog_preparing));
  const closeLabel = String(t(Localization.cv_dialog_close));
  const fallbackTitle = String(t(Localization.cv_dialog_title));
  const previewTitle = cv?.metadata.previewTitle.trim() || fallbackTitle;
  const fallbackFileName =
    cv?.candidate.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .toLowerCase() || 'cv';
  const configuredFileName = cv?.metadata.downloadFileName.trim();
  const fileName = configuredFileName || `${fallbackFileName}.pdf`;

  const document = cv ? <CvPdfDocument cv={cv} /> : null;

  return (
    <Dialog
      fullScreen={isMobile}
      fullWidth
      maxWidth='lg'
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Box className={classes.titleBox}>
          <Typography color='primary' variant='h6'>
            {previewTitle}
          </Typography>
          <Box className={classes.actions}>
            {document && (
              <PDFDownloadLink
                className={classes.downloadLink}
                document={document}
                fileName={
                  fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`
                }
              >
                {({ loading }) => (loading ? preparingLabel : downloadLabel)}
              </PDFDownloadLink>
            )}
            <IconButton aria-label={closeLabel} onClick={onClose}>
              <MdClose />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        {document ? (
          <PDFViewer className={classes.viewer} showToolbar>
            {document}
          </PDFViewer>
        ) : (
          <Spinner visible />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CvPreviewDialog;
