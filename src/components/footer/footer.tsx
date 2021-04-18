import { Grid, Typography } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography>Copyright</Typography>
    </Grid>
  );
};

export default Footer;
