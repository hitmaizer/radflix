import 'styled-components';

import theme from './theme';

export type ColorMode = 'light' | 'dark' | 'system';

export type ColorScheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'contrast';

type ColorVariant = {
  main: string;
  text: string;
  bg: string;
  alpha: string;
};

type AdditionalColors = {
  white: string;
  black: string;
  inverse: string;
  border: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
    transparent: string;
  };
  background: {
    main: string;
    secondary: string;
    gradient: string;
    fadeGradient: string;
  };
  appGradient: {
    left: string;
    right: string;
  };
  surface: {
    main: string;
    secondary: string;
    gradient: string;
  };
  input: {
    focus: {
      boxShadow: string;
      border: string;
    };
  };
  glow: {
    text: {
      primary: string;
      contrast: string;
    };
    card: {
      warning: string;
    };
  };
  shadow: {
    normal: string;
    raised: string;
    small: string;
  };
  dropdown: {
    border: string;
    shadow: string;
  };
  hero: {
    headingGradient: string;
    leftBg: string;
    rightBg: string;
  };
  companyStats: {
    bg: string;
    shadow: string;
    border: string;
  };
};

type Colors = { [K in ColorScheme]: ColorVariant } & AdditionalColors;

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextElement =
  | 'abbr'
  | 'blockquote'
  | 'br'
  | 'code'
  | 'em'
  | 'li'
  | 'span'
  | 'strong'
  | 'p'
  | 'pre';

export type WrapperElement =
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'aside'
  | 'div';

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Omit<ThemeType, 'colors'> {
    colors?: Colors;
    isLight?: boolean;
  }
}
