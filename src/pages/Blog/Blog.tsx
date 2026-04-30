import { Layout } from '@components';
import useTracker from '@hooks/useTracker';
import { Grid } from '@mui/material';
import useThemeStyles from '@themes/styles';
import Props from './props';

const Blog = (props: Props) => {
  const themeClasses = useThemeStyles();
  useTracker({ page_name: 'page5_blog' });

  return (
    <Layout>
      <Grid className={themeClasses.container} container spacing={4}></Grid>
    </Layout>
  );
};

export default Blog;
