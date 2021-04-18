import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

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
      color: Color.primary,
      fontWeight: 'bold',
    },
    jobText: {
      color: Color.primary,
      marginTop: '1rem',
    },
    descriptionText: {
      textAlign: 'justify',
      color: Color.white,
      marginTop: '3rem',
    },
    buttonContainer: {
      marginTop: '3rem',
    },
    aboutButton: {
      backgroundColor: Color.primary,
      color: Color.white,
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: Color.black,
      },
    },
    selected: {},
    contactButton: {
      color: Color.primary,
      '&:hover': {
        backgroundColor: Color.black,
      },
    },
  }),
  { index: 1 }
);
