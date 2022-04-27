import { Box, Paper } from '@material-ui/core';
import clsx from 'clsx';
import Typography from 'src/components/typography/typography';
import { Props } from './props';
import useStyles from './styles';

const ExperienceItem = (props: Props) => {
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
      {item.positionVisible && (
        <Typography className={clsx(classes.bold)} variant='subtitle1'>
          {item.position}
        </Typography>
      )}
      {item.responsibilityVisible && (
        <Box mt={2}>
          <Typography variant='body2'>{item.responsibility} </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ExperienceItem;
