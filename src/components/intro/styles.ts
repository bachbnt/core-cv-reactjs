import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles(
  (theme) => ({
    container: {
      padding: '2rem',
      [theme.breakpoints.up('sm')]: {
        padding: '3rem',
      },
      [theme.breakpoints.up('md')]: {
        padding: '5rem',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '10rem',
      },
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2,
    },
    nameText: {
      color: color.primary,
      fontWeight: 'bold',
    },
    jobText: {
      color: color.primary,
      marginTop: '1rem',
    },
    descriptionText: {
      textAlign: 'justify',
      color: color.white,
      marginTop: '3rem',
    },
    buttonContainer: {
      marginTop: '3rem',
    },
    aboutButton: {
      backgroundColor: color.primary,
      color: color.white,
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: color.black,
      },
    },
    selected: {},
    contactButton: {
      color: color.primary,
      '&:hover': {
        backgroundColor: color.black,
      },
    },
  }),
  { index: 1 }
);
