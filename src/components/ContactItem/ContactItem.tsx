import { IconButton, Typography } from '@components';
import { ContactType } from '@models/contact';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import useThemeStyles from '@themes/styles';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import { ComponentType } from 'react';
import { IconType } from 'react-icons';
import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMessenger,
  SiPinterest,
  SiReddit,
  SiSkype,
  SiSnapchat,
  SiTelegram,
  SiTiktok,
  SiTwitter,
  SiViber,
  SiWhatsapp,
  SiX,
  SiYoutube,
  SiZalo,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const CONTACT_ICON_MAP: Record<string, ComponentType<any>> = {
  Email: EmailIcon,
  Phone: PhoneIcon,
  Language: LanguageIcon,
  Home: HomeIcon,
  Work: WorkIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

const SOCIAL_ICON_MAP: Record<string, IconType> = {
  Github: SiGithub,
  Linkedin: SiLinkedin,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  Twitter: SiTwitter,
  X: SiX,
  Youtube: SiYoutube,
  Tiktok: SiTiktok,
  Telegram: SiTelegram,
  Whatsapp: SiWhatsapp,
  Discord: SiDiscord,
  Zalo: SiZalo,
  Skype: SiSkype,
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
      return <Component />;
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
