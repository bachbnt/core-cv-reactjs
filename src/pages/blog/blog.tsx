import { Layout } from '@components';
import { Grid } from '@material-ui/core';
import useThemeStyles from '@themes/styles';
import useStyles from './styles';

const Blog = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}></Grid>
    </Layout>
  );
};

export default Blog;
