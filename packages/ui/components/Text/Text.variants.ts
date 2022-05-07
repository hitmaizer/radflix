import { variant } from 'styled-system';

export const size = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: 0,
      letterSpacing: '0.005em',
    },
    sm: {
      fontSize: 1,
      letterSpacing: '-0.003em',
    },
    md: {
      fontSize: [1, 2],
      letterSpacing: '-0.01em',
    },
    lg: {
      fontSize: [2, 3],
      letterSpacing: '-0.017em',
    },
  },
});
