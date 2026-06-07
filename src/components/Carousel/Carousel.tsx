/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton } from '@components';
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { Children, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useStyles from './styles';

type Props = {
  autoPlay?: boolean;
  children?: ReactNode;
  indicators?: boolean;
  interval?: number;
  navButtonsAlwaysInvisible?: boolean;
} & Omit<BoxProps, 'children'>;

const MuiCarousel = (props: Props) => {
  const {
    autoPlay = true,
    children,
    className,
    indicators = true,
    interval = 4000,
    navButtonsAlwaysInvisible = false,
    ...rest
  } = props;
  const classes = useStyles();
  const slides = useMemo(() => Children.toArray(children), [children]);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!autoPlay || !hasMultipleSlides) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, hasMultipleSlides, interval, slides.length]);

  useEffect(() => {
    if (activeIndex < slides.length) return;
    setActiveIndex(0);
  }, [activeIndex, slides.length]);

  const navigate = (offset: number) => {
    setActiveIndex((index) => {
      return (index + offset + slides.length) % slides.length;
    });
  };

  return (
    <Box className={`${classes.root} ${className ?? ''}`} {...rest}>
      <Box className={classes.stage}>{slides[activeIndex]}</Box>
      {hasMultipleSlides && !navButtonsAlwaysInvisible && (
        <>
          <IconButton
            aria-label='Previous slide'
            className={`${classes.navButton} ${classes.prevButton}`}
            size='small'
            onClick={() => navigate(-1)}
          >
            <MdChevronLeft size={28} />
          </IconButton>
          <IconButton
            aria-label='Next slide'
            className={`${classes.navButton} ${classes.nextButton}`}
            size='small'
            onClick={() => navigate(1)}
          >
            <MdChevronRight size={28} />
          </IconButton>
        </>
      )}
      {hasMultipleSlides && indicators && (
        <Box className={classes.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Show slide ${index + 1}`}
              className={
                index === activeIndex
                  ? `${classes.indicator} ${classes.activeIndicator}`
                  : classes.indicator
              }
              type='button'
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MuiCarousel;
