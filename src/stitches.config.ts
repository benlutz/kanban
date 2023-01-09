import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {},
  },
  media: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)',
  },
  utils: {
    marginHorizontal: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingHorizontal: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingVertical: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({});
