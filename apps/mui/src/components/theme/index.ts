import { createTheme, Palette } from '@mui/material/styles';
import borders from './borders';
import boxShadows from './box-shadows';
import breakpoints from './breakpoints';
import functions from './functions';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';
declare module '@mui/material/styles' {
   interface Theme {
      borders: {
         borderColor: string;
         borderWidth: {
            0: number;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
         };
         borderRadius: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            section: string;
         };
      };
      functions: {
         boxShadow: (
            offset: number[],
            radius: number[],
            color: string,
            opacity: number,
            inset?: string
         ) => string;
         hexToRgb: (color: string) => string;
         linearGradient: (
            color: string,
            colorState: string,
            angle?: number
         ) => string;
         pxToRem: (number: number, baseNumber?: number) => string;
         rgba: (color: string, opacity: number) => string;
      };
      boxShadows: {
         xs: string;
         sm: string;
         md: string;
         lg: string;
         xl: string;
         xxl: string;
         inset: string;
         colored: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
            light: string;
            dark: string;
         };
         navbarBoxShadow: string;
         sliderBoxShadow: {
            thumb: string;
         };
         tabsBoxShadow: {
            indicator: string;
         };
      };
   }
   interface ThemeOptions {
      functions?: {
         boxShadow?: (
            offset: number[],
            radius: number[],
            color: string,
            opacity: number,
            inset?: string
         ) => string;
         hexToRgb?: (color: string) => string;
         linearGradient?: (
            color: string,
            colorState: string,
            angle?: number
         ) => string;
         pxToRem?: (number: number, baseNumber?: number) => string;
         rgba?: (color: string, opacity: number) => string;
      };
      borders?: {
         borderColor?: string;
         borderWidth?: {
            0?: number;
            1?: string;
            2?: string;
            3?: string;
            4?: string;
            5?: string;
         };
         borderRadius?: {
            xs?: string;
            sm?: string;
            md?: string;
            lg?: string;
            xl?: string;
            xxl?: string;
            section?: string;
         };
      };
      boxShadows?: {
         xs?: string;
         sm?: string;
         md?: string;
         lg?: string;
         xl?: string;
         xxl?: string;
         inset?: string;
         colored?: {
            primary?: string;
            secondary?: string;
            info?: string;
            success?: string;
            warning?: string;
            error?: string;
            light?: string;
            dark?: string;
         };
         navbarBoxShadow?: string;
         sliderBoxShadow?: {
            thumb?: string;
         };
         tabsBoxShadow?: {
            indicator?: string;
         };
      };
   }
   interface Palette {
      white: {
         main: string;
         focus: string;
      };
      transparent: {
         main: string;
      };
      black: {
         light: string;
         main: string;
         focus: string;
      };

      light: ColorsTypes;
      dark: ColorsTypes;

      gradients: {
         primary: GradientsTypes;
         secondary: GradientsTypes;
         info: GradientsTypes;
         success: GradientsTypes;
         warning: GradientsTypes;
         error: GradientsTypes;
         light: GradientsTypes;
         dark: GradientsTypes;
      };
      socialMediaColors: {
         facebook: SocialMediaColorsTypes;
         twitter: SocialMediaColorsTypes;
         instagram: SocialMediaColorsTypes;
         linkedin: SocialMediaColorsTypes;
         pinterest: SocialMediaColorsTypes;
         youtube: SocialMediaColorsTypes;
         vimeo: SocialMediaColorsTypes;
         slack: SocialMediaColorsTypes;
         dribbble: SocialMediaColorsTypes;
         github: SocialMediaColorsTypes;
         reddit: SocialMediaColorsTypes;
         tumblr: SocialMediaColorsTypes;
      };
      badgeColors: {
         primary: BadgeColorsTypes;
         secondary: BadgeColorsTypes;
         info: BadgeColorsTypes;
         success: BadgeColorsTypes;
         warning: BadgeColorsTypes;
         error: BadgeColorsTypes;
         light: BadgeColorsTypes;
         dark: BadgeColorsTypes;
      };
      coloredShadows: {
         [key: string]: string;
      };
      inputBorderColor: string;
      tabs: {
         indicator: {
            boxShadow: string;
         };
      };
   }

   interface PaletteOptions {
      white?: {
         main?: string;
         focus?: string;
      };
      transparent?: {
         main?: string;
      };
      black?: {
         light?: string;
         main?: string;
         focus?: string;
      };

      light?: ColorsTypes;
      dark?: ColorsTypes;

      gradients?: {
         primary?: GradientsTypes;
         secondary?: GradientsTypes;
         info?: GradientsTypes;
         success?: GradientsTypes;
         warning?: GradientsTypes;
         error?: GradientsTypes;
         light?: GradientsTypes;
         dark?: GradientsTypes;
      };
      socialMediaColors?: {
         facebook?: SocialMediaColorsTypes;
         twitter?: SocialMediaColorsTypes;
         instagram?: SocialMediaColorsTypes;
         linkedin?: SocialMediaColorsTypes;
         pinterest?: SocialMediaColorsTypes;
         youtube?: SocialMediaColorsTypes;
         vimeo?: SocialMediaColorsTypes;
         slack?: SocialMediaColorsTypes;
         dribbble?: SocialMediaColorsTypes;
         github?: SocialMediaColorsTypes;
         reddit?: SocialMediaColorsTypes;
         tumblr?: SocialMediaColorsTypes;
      };
      badgeColors?: {
         primary?: BadgeColorsTypes;
         secondary?: BadgeColorsTypes;
         info?: BadgeColorsTypes;
         success?: BadgeColorsTypes;
         warning?: BadgeColorsTypes;
         error?: BadgeColorsTypes;
         light?: BadgeColorsTypes;
         dark?: BadgeColorsTypes;
      };
      coloredShadows?: {
         [key: string]: string;
      };
      inputBorderColor?: string;
      tabs?: {
         indicator?: {
            boxShadow?: string;
         };
      };
      shadows?: {
         transparentOne: string;
         transparentTwo: string;
         transparentThree: string;
      };
   }
   interface PaletteColor {
      main: string;
      focus: string;
   }
   interface PaletteColorOptions {
      main?: string;
      focus?: string;
   }
   interface TypeBackground {
      default: string;
      sidenav?: string;
      card?: string;
   }
   interface TypeText {
      main: string;
      focus: string;
      primary: string;
      secondary: string;
      disabled: string;
   }

   interface ColorsTypes {
      main: string;
      focus: string;
   }

   interface GradientsTypes {
      main: string;
      state: string;
   }

   interface SocialMediaColorsTypes {
      main: string;
      dark: string;
   }

   interface BadgeColorsTypes {
      background: string;
      text: string;
   }
   interface BreakpointOverrides {
      xxl: true;
   }
   interface DisplayTypes {
      fontFamily: string;
      color: string;
      fontWeight: number;
      lineHeight: number;
      fontSize: string;
   }
   interface TypographyVariants {
      fontFamily: string;
      fontWeightLighter: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      h1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h3: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h4: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h5: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h6: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      subtitle1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      subtitle2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      button: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
         textTransform: any;
      };
      caption: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      overline: {
         fontFamily: string;
      };
      d1: DisplayTypes;
      d2: DisplayTypes;
      d3: DisplayTypes;
      d4: DisplayTypes;
      d5: DisplayTypes;
      d6: DisplayTypes;
      size: {
         xxs: string;
         xs: string;
         sm: string;
         md: string;
         lg: string;
         xl: string;
         '2xl': string;
         '3xl': string;
      };
      lineHeight: {
         sm: number;
         md: number;
         lg: number;
      };
   }

   // // allow configuration using `createTheme`
   interface TypographyVariantsOptions {
      fontFamily?: string;
      fontWeightLighter?: number;
      fontWeightLight?: number;
      fontWeightRegular?: number;
      fontWeightMedium?: number;
      fontWeightBold?: number;
      h1?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h2?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h3?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h4?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h5?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h6?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      subtitle1?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      subtitle2?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body1?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body2?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      button?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
         textTransform: any;
      };
      caption?: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      overline?: {
         fontFamily: string;
      };
      d1?: DisplayTypes;
      d2?: DisplayTypes;
      d3?: DisplayTypes;
      d4?: DisplayTypes;
      d5?: DisplayTypes;
      d6?: DisplayTypes;
      size?: {
         xxs: string;
         xs: string;
         sm: string;
         md: string;
         lg: string;
         xl: string;
         '2xl': string;
         '3xl': string;
      };
      lineHeight?: {
         sm: number;
         md: number;
         lg: number;
      };
   }

   interface TypographyOptions {
      fontFamily: string;
      fontWeightLighter: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      h1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h3: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h4: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h5: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      h6: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         color: string;
         lineHeight: number;
      };
      subtitle1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      subtitle2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body1: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      body2: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      button: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
         textTransform: any;
      };
      caption: {
         fontFamily: string;
         fontSize: string;
         fontWeight: number;
         lineHeight: number;
      };
      overline: {
         fontFamily: string;
      };
      d1: DisplayTypes;
      d2: DisplayTypes;
      d3: DisplayTypes;
      d4: DisplayTypes;
      d5: DisplayTypes;
      d6: DisplayTypes;
      size: {
         xxs: string;
         xs: string;
         sm: string;
         md: string;
         lg: string;
         xl: string;
         '2xl': string;
         '3xl': string;
      };
      lineHeight: {
         sm: number;
         md: number;
         lg: number;
      };
   }
}
const theme = createTheme({
   palette: palette('light'),
   borders: borders(palette('light') as Palette),
   functions,
   breakpoints,
   boxShadows: boxShadows(palette('light') as Palette),
   // shadows: shadowsTheme(palette('light') as PaletteOptions),
   typography,
   components: overrides,
});
export default theme;
