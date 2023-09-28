import Carousel from 'react-material-ui-carousel';
import Props from './props';
import useStyles from './styles';

const MuiCarousel = (props: Props) => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.root}
      duration={1000}
      animation='slide'
      {...props}
    >
      {props.children}
    </Carousel>
  );
};

export default MuiCarousel;
