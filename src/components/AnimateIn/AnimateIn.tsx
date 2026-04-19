import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  delay?: number;
}

const AnimateIn = ({ delay = 0, sx, children, ...rest }: Props) => (
  <Box
    {...rest}
    sx={{
      '@keyframes fadeSlideUp': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      animation: 'fadeSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
      animationDelay: `${delay}ms`,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default AnimateIn;
