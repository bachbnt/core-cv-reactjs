import { Grid } from '@material-ui/core';
import Typography from '../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography>Copyright</Typography>
    </Grid>
  );
};

export default Footer;
