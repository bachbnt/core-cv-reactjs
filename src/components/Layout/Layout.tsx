import { Footer, Header } from '@components';
import { Box, Container } from '@mui/material';
import { RootState, useAppSelector } from '@redux/store';
import { routes } from '@routes/routes';
import lowerCase from 'lodash/lowerCase';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Props from './props';
import useStyles from './styles';

const Layout = (props: Props) => {
  const classes = useStyles();
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const config = useAppSelector(
    (state: RootState) => state.configReducer.config,
  );

  const [isExiting, setIsExiting] = useState(false);
  const navDirectionRef = useRef<'next' | 'prev' | null>(null);
  const pendingPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isExiting || !pendingPathRef.current) return;
    const timer = setTimeout(() => {
      const path = pendingPathRef.current!;
      pendingPathRef.current = null;
      setIsExiting(false);
      navigate(path);
    }, 280);
    return () => clearTimeout(timer);
  }, [isExiting, navigate]);

  useEffect(() => {
    const visibleRoutes = routes.filter(
      (route) => (config as any)?.[`${lowerCase(route.component)}Visible`],
    );
    const currentIndex = visibleRoutes.findIndex(
      (route) => route.path === location.pathname,
    );

    if (currentIndex === -1) return;

    let hasNavigated = false;
    let wheelDelta = 0;
    let touchStartY = 0;

    const triggerNavigate = (index: number, direction: 'next' | 'prev') => {
      if (hasNavigated) return;
      const route = visibleRoutes[index];
      if (!route) return;
      const isEnabled = (config as any)?.[
        `${lowerCase(route.component)}Enable`
      ];
      if (!isEnabled) return;
      hasNavigated = true;
      navDirectionRef.current = direction;
      pendingPathRef.current = route.path;
      setIsExiting(true);
    };

    const isAtPageBottom = () =>
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    const isAtPageTop = () => window.scrollY <= 50;
    const isPageScrollable = () =>
      document.body.scrollHeight > window.innerHeight + 1;

    const handleWheel = (e: WheelEvent) => {
      if (hasNavigated) return;
      if (e.deltaY > 0) {
        if (currentIndex >= visibleRoutes.length - 1) return;
        if (isPageScrollable() && !isAtPageBottom()) {
          wheelDelta = 0;
          return;
        }
        wheelDelta += e.deltaY;
        if (wheelDelta >= 150) triggerNavigate(currentIndex + 1, 'next');
      } else {
        if (currentIndex <= 0) return;
        if (isPageScrollable() && !isAtPageTop()) {
          wheelDelta = 0;
          return;
        }
        wheelDelta += e.deltaY;
        if (wheelDelta <= -150) triggerNavigate(currentIndex - 1, 'prev');
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (hasNavigated) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (deltaY >= 60) {
        if (currentIndex >= visibleRoutes.length - 1) return;
        if (isPageScrollable() && !isAtPageBottom()) return;
        triggerNavigate(currentIndex + 1, 'next');
      } else if (deltaY <= -60) {
        if (currentIndex <= 0) return;
        if (isPageScrollable() && !isAtPageTop()) return;
        triggerNavigate(currentIndex - 1, 'prev');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, config]);

  const contentAnimClass = isExiting
    ? navDirectionRef.current === 'next'
      ? classes.exitNext
      : classes.exitPrev
    : navDirectionRef.current === 'next'
      ? classes.enterNext
      : navDirectionRef.current === 'prev'
        ? classes.enterPrev
        : '';

  return (
    <Box className={classes.container}>
      <Header />
      <Box
        key={location.pathname}
        className={`${classes.content} ${contentAnimClass}`}
      >
        <Container maxWidth='xl'>{children} </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
