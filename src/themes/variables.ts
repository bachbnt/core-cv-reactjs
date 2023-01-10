import { Constant } from '@core/constants';

const variables = {
  buttonMinWidth: 64,

  headerHeight: 64,
  footerHeight: 48,

  fontSize: 14,
  fontSizeHeading1: 30,
  fontSizeHeading2: 24,
  fontSizeHeading3: 20,
  fontSizeHeading4: 16,
  fontSizeHeading5: 14,
  fontSizeHeading6: 12,

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  lineHeight: 1.5,

  borderRadius: 5,
  borderRadiusCircle: '50%',

  fontFamily: 'Source Code Pro',

  backgroundUrl: Constant.DEFAULT_BACKGROUND_IMAGE,
};

export default variables;
export type AppVariable = typeof variables;
