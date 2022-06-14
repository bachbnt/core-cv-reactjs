import { useCallback, useMemo } from 'react';
import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import { Home as HomeIcon, Phone, Mail } from '@material-ui/icons';
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiSkype,
  SiZalo,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import clsx from 'clsx';
import { IconButton, Typography } from 'src/components';
import { ContactSubtype, ContactType } from 'src/models/contact';
import useThemeStyles from 'src/themes/styles';
import Props from './props';
import useStyles from './styles';

const ContactItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    if (item.enable) {
      window.open(item.url);
    }
  }, [item]);

  const renderContactIcon = useMemo(() => {
    switch (item.subtype) {
      case ContactSubtype.ADDRESS:
        return <HomeIcon />;
      case ContactSubtype.PHONE:
        return <Phone />;
      case ContactSubtype.EMAIL:
        return <Mail />;
      default:
        return <div />;
    }
  }, [item]);

  const renderSocialIcon = useMemo(() => {
    switch (item.subtype) {
      case ContactSubtype.FACEBOOK:
        return <SiFacebook size={32} />;
      case ContactSubtype.GITHUB:
        return <SiGithub size={32} />;
      case ContactSubtype.LINKEDIN:
        return <SiLinkedin size={32} />;
      case ContactSubtype.SKYPE:
        return <SiSkype size={32} />;
      case ContactSubtype.ZALO:
        return <SiZalo size={32} />;
      default:
        return <div />;
    }
  }, [item]);

  const renderContactItem = useMemo(() => {
    return item.visible ? (
      <MuiCard
        className={clsx(classes.card, themeClasses.card)}
        onClick={onClick}
      >
        <CardActionArea>
          <CardContent className={themeClasses.cardContent}>
            {renderContactIcon}
            <Typography color='primary' variant='h6' align='center'>
              {_.capitalize(t(item.subtype))}
            </Typography>
            <Box mt={2}>
              <Typography variant='body2' align='center'>
                {item.name}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </MuiCard>
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
    switch (item.type) {
      case ContactType.CONTACT:
        return renderContactItem;
      case ContactType.SOCIAL:
        return renderSocialItem;
      default:
        return <div />;
    }
  }, [item, renderContactItem, renderSocialItem]);

  return renderContact;
};

export default ContactItem;
