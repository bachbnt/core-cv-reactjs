import { IconButton, Typography } from '@components';
import { Box, Card, CardActionArea, CardContent } from '@material-ui/core';
import * as Mi from '@material-ui/icons';
import { ContactType } from '@models/contact';
import useThemeStyles from '@themes/styles';
import clsx from 'clsx';
import { capitalize } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Si from 'react-icons/si';
import Props from './props';
import useStyles from './styles';

const ContactItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    if (item.urlEnable) {
      window.open(item.url);
    }
  }, [item]);

  const renderContactIcon = useMemo(() => {
    const Component = (Mi as any)[item.icon];
    if (Component) {
      return <Component size={32} />;
    }
    return <div />;
  }, [item]);

  const renderSocialIcon = useMemo(() => {
    const Component = (Si as any)[`Si${item.icon}`];
    if (Component) {
      return <Component size={32} />;
    }
    return <div />;
  }, [item]);

  const renderContactItem = useMemo(() => {
    return item.visible ? (
      <Card
        key={item.id}
        className={clsx(classes.card, themeClasses.card)}
        onClick={onClick}
      >
        <CardActionArea>
          <CardContent className={themeClasses.cardContent}>
            {renderContactIcon}
            <Typography color='primary' variant='h6' align='center'>
              {capitalize(t(item.type))}
            </Typography>
            <Box mt={2}>
              <Typography variant='body2' align='center'>
                {item.name}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    ) : (
      <div />
    );
  }, [item, classes, themeClasses, renderContactIcon, onClick, t]);

  const renderSocialItem = useMemo(() => {
    return item.visible ? (
      <IconButton onClick={onClick}>{renderSocialIcon}</IconButton>
    ) : (
      <div />
    );
  }, [item, renderSocialIcon, onClick]);

  const renderContact = useMemo(() => {
    if (item.type === ContactType.SOCIAL) {
      return renderSocialItem;
    }
    return renderContactItem;
  }, [item, renderContactItem, renderSocialItem]);

  return renderContact;
};

export default ContactItem;
