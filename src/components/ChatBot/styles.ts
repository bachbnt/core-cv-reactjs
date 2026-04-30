import { createStyles, makeStyles } from '@mui/styles';
import colors from '@themes/colors';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    fabIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    fabIconOpen: {
      transform: 'rotate(180deg)',
    },
    panel: {
      width: 340,
      height: 480,
      marginBottom: 12,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: `${colors.grey} !important`,
      borderRadius: `${theme.variables.borderRadius}px !important`,
      overflow: 'hidden',
      transformOrigin: 'bottom right',
      animation: '$panelIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100vw - 32px)',
        height: '60vh',
      },
    },
    '@keyframes panelIn': {
      '0%': { opacity: 0, transform: 'scale(0.6) translateY(20px)' },
      '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
    },
    header: {
      backgroundColor: colors.primary,
      padding: '8px 8px 8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
    },
    headerTitle: {
      fontWeight: `600 !important`,
      letterSpacing: '0.05em !important',
      textTransform: 'uppercase',
    },
    messages: {
      flex: 1,
      overflowY: 'auto',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      '&::-webkit-scrollbar': { width: 4 },
      '&::-webkit-scrollbar-thumb': { backgroundColor: colors.primary },
    },
    messageBubble: {
      maxWidth: '80%',
      padding: '6px 12px',
      borderRadius: 12,
      animation: '$bubbleIn 0.2s ease-out',
    },
    '@keyframes bubbleIn': {
      '0%': { opacity: 0, transform: 'translateY(6px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    messageText: {
      wordBreak: 'break-word',
      whiteSpace: 'pre-wrap',
    },
    botBubble: {
      alignSelf: 'flex-start',
      backgroundColor: '#2a2a2a',
      borderBottomLeftRadius: 4,
    },
    userBubble: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
      borderBottomRightRadius: 4,
    },
    typingDot: {
      display: 'inline-block',
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: colors.white,
      margin: '0 2px',
      animation: '$bounce 1.2s infinite ease-in-out',
      '&:nth-child(2)': { animationDelay: '0.2s' },
      '&:nth-child(3)': { animationDelay: '0.4s' },
    },
    '@keyframes bounce': {
      '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: 0.4 },
      '40%': { transform: 'scale(1)', opacity: 1 },
    },
    inputArea: {
      borderTop: `1px solid #333`,
      padding: '8px 4px 8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flexShrink: 0,
    },
    sendButton: {
      color: `${colors.primary} !important`,
      '&:disabled': {
        color: `#555 !important`,
      },
    },
    limitText: {
      flex: 1,
      textAlign: 'center',
      color: `#888 !important`,
    },
  }),
);
