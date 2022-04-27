import { useCallback, useMemo } from 'react';
import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import { MdHome, MdPhone, MdMail } from 'react-icons/md';
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiSkype,
  SiZalo,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import _ from 'lodash';
import IconButton from 'src/components/button/iconButton/iconButton';
import Typography from 'src/components/typography/typography';
import { ContactSubtype, ContactType } from 'src/models/contact';
import { Props } from './props';
import useStyles from './styles';

const ContactItem = (props: Props) => {
  const classes = useStyles();
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
        return <MdHome className={clsx(classes.primary)} size={48} />;
      case ContactSubtype.PHONE:
        return <MdPhone className={clsx(classes.primary)} size={48} />;
      case ContactSubtype.EMAIL:
        return <MdMail className={clsx(classes.primary)} size={48} />;
      default:
        return <div />;
    }
  }, [item, classes]);

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
        classes={{ root: classes.root }}
        className={clsx(classes.background)}
        onClick={onClick}
      >
        <CardActionArea>
          <CardContent className={clsx(classes.center)}>
            {renderContactIcon}
            <Typography
              classes={{ root: classes.primary }}
              className={clsx(classes.bold)}
              variant='h6'
              align='center'
            >
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
  }, [item, classes, renderContactIcon, onClick, t]);

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
