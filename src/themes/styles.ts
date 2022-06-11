import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from './themes';

export const styles = makeStyles((theme: AppTheme) => createStyles({}));

export type AppStyle = typeof styles;
