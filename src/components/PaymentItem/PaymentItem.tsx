import { IconButton, Typography } from '@components'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material'
import useThemeStyles from '@themes/styles'
import clsx from 'clsx'
import { IoCopy } from 'react-icons/io5'
import Props from './props'
import useStyles from './styles'

const PaymentItem = (props: Props) => {
  const classes = useStyles()
  const themeClasses = useThemeStyles()
  const { item, onItemClick, onCopyClick, onCopyAllClick, onOpenDialog } = props

  return item.visible ? (
    <Card
      className={clsx(classes.card, themeClasses.card)}
      onClick={() => onItemClick?.(item)}
    >
      <CardActionArea component='span'>
        <CardContent className={themeClasses.cardContent}>
          {item.nameVisible && item.accountVisible && (
            <IconButton
              className={clsx(classes.copyAllButton)}
              onClick={() => {
                onCopyAllClick(item)
              }}
            >
              <IoCopy color='primary' />
            </IconButton>
          )}
          {item.nameVisible && (
            <Typography color='primary' variant='h6' align='center'>
              {item.name}
            </Typography>
          )}
          {item.accountVisible && (
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              mb={1}
              gap={1}
            >
              <Typography
                className={clsx(themeClasses.cardDescription, classes.account)}
                variant='body2'
              >
                {item.account}
              </Typography>
              <IconButton
                className={classes.copyButton}
                size='small'
                onClick={() => onCopyClick(item)}
              >
                <IoCopy size={18} />
              </IconButton>
            </Box>
          )}
          {item.qrCodeVisible && (
            <Box mt={2} width='100%' display='flex' justifyContent='center'>
              <CardMedia
                className={classes.img}
                component='img'
                image={item.qrCode}
                onClick={onOpenDialog}
                loading='lazy'
              />
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null
}

export default PaymentItem
