/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton, Typography } from '@components';
import { ContactType } from '@models/contact';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import useThemeStyles from '@themes/styles';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import { FaGithub, FaLinkedin, FaSkype, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdHome, MdLanguage, MdPhone, MdWork } from 'react-icons/md';
import { IconType } from 'react-icons';
import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiMessenger,
  SiPinterest,
  SiReddit,
  SiSnapchat,
  SiTelegram,
  SiTiktok,
  SiViber,
  SiWhatsapp,
  SiX,
  SiYoutube,
  SiZalo,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const CONTACT_ICON_MAP: Record<string, IconType> = {
  Email: MdEmail,
  Phone: MdPhone,
  Language: MdLanguage,
  Home: MdHome,
  Work: MdWork,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

const SOCIAL_ICON_MAP: Record<string, IconType> = {
  Github: SiGithub,
  Linkedin: FaLinkedin,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  Twitter: FaTwitter,
  X: SiX,
  Youtube: SiYoutube,
  Tiktok: SiTiktok,
  Telegram: SiTelegram,
  Whatsapp: SiWhatsapp,
  Discord: SiDiscord,
  Zalo: SiZalo,
  Skype: FaSkype,
  Reddit: SiReddit,
  Pinterest: SiPinterest,
  Snapchat: SiSnapchat,
  Messenger: SiMessenger,
  Viber: SiViber,
};

const ContactItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item, onItemClick } = props;
  const { t } = useTranslation();

  const onClick = () => {
    if (item.urlEnable) {
      onItemClick?.(item);
      window.open(item.url);
    }
  };

  const renderContactIcon = () => {
    const Component = CONTACT_ICON_MAP[item.icon];
    if (Component) {
      return <Component className={classes.contactIcon} size={48} />;
    }
    return <div />;
  };

  const renderSocialIcon = () => {
    const Component = SOCIAL_ICON_MAP[item.icon];
    if (Component) {
      return <Component size={32} />;
    }
    return <div />;
  };

  const renderContactItem = () => {
    return item.visible ? (
      <Card
        key={item.id}
        className={clsx(classes.card, themeClasses.card)}
        onClick={onClick}
      >
        <CardActionArea>
          <CardContent className={themeClasses.cardContent}>
            {renderContactIcon()}
            <Typography color='primary' variant='h6' align='center'>
              {capitalize(t(item.type) || '')}
            </Typography>
            <Box sx={{ mt: 2 }}>
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
  };

  const renderSocialItem = () => {
    return item.visible ? (
      <IconButton onClick={onClick}>{renderSocialIcon()}</IconButton>
    ) : (
      <div />
    );
  };

  if (item.type === ContactType.SOCIAL) {
    return renderSocialItem();
  }
  return renderContactItem();
};

export default ContactItem;
