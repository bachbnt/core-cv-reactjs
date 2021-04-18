import { Typography as MuiTypography } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Typography = (props: Props) => {
  const classes = useStyles();
  return <MuiTypography classes={{ root: classes.root }} {...props} />;
};

export default Typography;
