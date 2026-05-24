/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton, Spinner, Typography } from '@components';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { MdClose } from 'react-icons/md';
import CvPdfDocument from './CvPdfDocument';
import Props from './props';
import useStyles from './styles';

const CvPreviewDialog = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { cv, open, onClose } = props;

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
            CV Preview
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
                {({ loading }) => (loading ? 'Preparing' : 'Download')}
              </PDFDownloadLink>
            )}
            <IconButton aria-label='Close CV preview' onClick={onClose}>
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
