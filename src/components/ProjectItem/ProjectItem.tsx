import { Carousel, Typography } from '@components';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
} from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
import useThemeStyles from '@themes/styles';
import Props from './props';
import useStyles from './styles';

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item, onOpenDialog } = props;

  const { image } =
    useAppSelector((state: RootState) => state.configReducer.config) || {};

  const onClickRef = (url: string) => {
    window.open(url);
  };

  return item.visible ? (
    <Card key={item.id} className={classes.card}>
      <CardActionArea component='span' onClick={onOpenDialog}>
        {item.coverVisible && (
          <Carousel
            indicators={item.covers?.length > 1}
            navButtonsAlwaysInvisible={!(item.covers?.length > 1)}
          >
            {[item.cover || image?.comingSoon, ...(item.covers ?? [])].map(
              (element, index) => (
                <CardMedia
                  key={item.id}
                  className={classes.img}
                  component='img'
                  image={element}
                  loading='lazy'
                />
              )
            )}
          </Carousel>
        )}
        <CardContent>
          {item.nameVisible && (
            <Typography color='primary' variant='h6'>
              {item.name}
            </Typography>
          )}
          {item.descriptionVisible && (
            <Box overflow='hidden'>
              <Typography
                className={themeClasses.cardDescription}
                variant='body2'
              >
                {item.description}
              </Typography>
            </Box>
          )}
          {item.technologyVisible && (
            <Box my={2}>
              <Typography variant='subtitle2'>{item.technology}</Typography>
            </Box>
          )}
          {Array.isArray(item.refs) && item.refs.length && (
            <Box
              my={2}
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
            >
              <Link
                component='button'
                variant='caption'
                align='left'
                onClick={() => onClickRef(item.refs[0])}
              >
                {item.refs[0]}
              </Link>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null;
};

export default ProjectItem;
