import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from './themes';

const styles = makeStyles((theme: AppTheme) =>
  createStyles({
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardDescription: {
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
    },
  })
);

export default styles;
export type AppStyle = typeof styles;
