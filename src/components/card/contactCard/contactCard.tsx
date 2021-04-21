import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Typography from '../../typography/typography';
import { Props } from './props';
import useStyles from './styles';

const ContactCard = (props: Props) => {
  const classes = useStyles();
  const { item, icon, title } = props;
  const { t } = useTranslation();

  const onCardClick = (url: string) => {
    if (url) {
      window.open(url);
    }
  };

  return (
    <MuiCard
      classes={{ root: classes.root }}
      className={clsx(classes.background)}
      onClick={() => onCardClick(item.url)}>
      <CardActionArea>
        <CardContent className={clsx(classes.center)}>
          {icon}
          <Typography
            classes={{ root: classes.primary }}
            className={clsx(classes.bold)}
            variant='h6'
            align='center'>
            {t(title)}
          </Typography>
          <Box mt={2}>
            <Typography variant='body2' align='center'>
              {item.name}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default ContactCard;
