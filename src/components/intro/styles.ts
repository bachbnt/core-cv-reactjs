import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem',
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
  quoteText: {
    textAlign: 'justify',
    color: color.white,
    marginTop: '3rem',
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  aboutButton: {
    backgroundColor: color.primary,
    color: color.white,
    [theme.breakpoints.up('xs')]: {
      marginRight: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
      width: '100%',
    },
  },
  contactButton: {
    color: color.primary,
  },
}));
