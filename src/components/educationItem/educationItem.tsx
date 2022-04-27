import { Box, Paper } from '@material-ui/core';
import clsx from 'clsx';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const EducationItem = (props: Props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <Paper className={clsx(classes.background)} elevation={3}>
      {item.nameVisible && (
        <Typography
          classes={{ root: classes.primary }}
          className={clsx(classes.bold)}
          variant='h6'
        >
          {item.name.toUpperCase()}
        </Typography>
      )}
      {item.degreeVisible && (
        <Typography className={clsx(classes.bold)} variant='subtitle1'>
          {item.degree}
        </Typography>
      )}
      {item.majorVisible && (
        <Box mt={2}>
          <Typography variant='body2'>{item.major} </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default EducationItem;
