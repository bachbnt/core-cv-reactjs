/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton, TextField, Typography } from '@components';
import Constant from '@core/constants';
import { Localization } from '@locales/i18n';
import { Box, Fab, Paper } from '@mui/material';
import { useConfigQuery } from '@queries';
import { useTranslation } from 'react-i18next';
import { MdChat, MdClose, MdSend } from 'react-icons/md';
import useStyles from './styles';
import useChatBot from './useChatBot';

const ChatBot = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { data: config } = useConfigQuery();

  const {
    isOpen,
    setIsOpen,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    sendMessage,
    handleKeyDown,
    messagesEndRef,
    inputRef,
    userMessageCount,
    isLimitReached,
  } = useChatBot();

  if (!config?.chatVisible) return null;

  return (
    <Box className={classes.container}>
      {isOpen && (
        <Paper className={classes.panel} elevation={8}>
          <Box className={classes.header}>
            <Typography className={classes.headerTitle} variant='body2'>
              {t(Localization.chatbot_title)}
            </Typography>
            <IconButton
              aria-label='Close chat'
              size='small'
              onClick={() => setIsOpen(false)}
            >
              <MdClose size={18} />
            </IconButton>
          </Box>

          <Box className={classes.messages}>
            {messages.map((message) => (
              <Box
                key={message.id}
                className={`${classes.messageBubble} ${message.role === 'user' ? classes.userBubble : classes.botBubble}`}
              >
                <Typography variant='body2' className={classes.messageText}>
                  {message.content}
                </Typography>
              </Box>
            ))}
            {isLoading && (
              <Box className={`${classes.messageBubble} ${classes.botBubble}`}>
                <span className={classes.typingDot} />
                <span className={classes.typingDot} />
                <span className={classes.typingDot} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          <Box className={classes.inputArea}>
            {isLimitReached ? (
              <Typography variant='caption' className={classes.limitText}>
                {t(Localization.chatbot_limit_reached)}
              </Typography>
            ) : (
              <>
                <Box flex={1}>
                  <TextField
                    inputRef={inputRef}
                    multiline
                    maxRows={3}
                    size='small'
                    placeholder={`${t(Localization.chatbot_placeholder)} (${userMessageCount}/${Constant.CHAT_MAX_USER_MESSAGES})`}
                    value={inputValue}
                    onChange={(event) =>
                      setInputValue(event.target.value.slice(0, 500))
                    }
                    inputProps={{ onKeyDown: handleKeyDown }}
                    disabled={isLoading}
                  />
                </Box>
                <IconButton
                  aria-label='Send chat message'
                  className={classes.sendButton}
                  size='small'
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                >
                  <MdSend size={18} color='inherit' />
                </IconButton>
              </>
            )}
          </Box>
        </Paper>
      )}

      <Fab
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        color='primary'
        size='medium'
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <Box
          className={`${classes.fabIcon} ${isOpen ? classes.fabIconOpen : ''}`}
        >
          {isOpen ? <MdClose size={24} /> : <MdChat size={24} />}
        </Box>
      </Fab>
    </Box>
  );
};

export default ChatBot;
