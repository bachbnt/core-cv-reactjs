import { IconButton, Typography } from '@components'
import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import colors from '@themes/colors'
import { MdFileDownload } from 'react-icons/md'
import Props from './props'
import useStyles from './styles'

const CertificateDialog = (props: Props) => {
  const classes = useStyles()
  const { item, openDialog, onCloseDialog } = props

  const onDownloadClick = () => {
    window.open(item.url)
  }

  return item.visible ? (
    <Dialog
      key={item.id}
      fullWidth
      maxWidth='md'
      open={openDialog}
      onClose={onCloseDialog}
    >
      <DialogTitle>
        <Box className={classes.titleBox}>
          {item.nameVisible && (
            <Typography color='primary' variant='h6'>
              {item.name}
            </Typography>
          )}
          <IconButton onClick={onDownloadClick}>
            <MdFileDownload color={colors.primary} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {item.imageVisible && (
          <CardMedia
            className={classes.img}
            component='img'
            image={item.image}
            loading='lazy'
          />
        )}
      </DialogContent>
    </Dialog>
  ) : null
}

export default CertificateDialog
