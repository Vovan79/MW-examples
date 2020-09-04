import { createMuiTheme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import AvenirRomanTtf from '../assets/fonts/AvenirRoman.ttf';

const avenir = {
  fontFamily: 'AvenirRoman',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Avenir'),
    local('AvenirRoman'),
    url(${AvenirRomanTtf}) format('ttf')
  `,
};

export const DEFAULT_BACKGROUND_COLOR: CSSProperties['color'] = '#ffffff' as const;
export const MAIN_BACKGROUND_COLOR: CSSProperties['color'] = '#bfc2c5' as const;
export const LIGHT_BLUE_COLOR: CSSProperties['color'] = '#D5F5FF' as const;
export const BLUE_COLOR: CSSProperties['color'] = '#4ac6e3' as const;
export const BORDER_COLOR: CSSProperties['color'] = 'rgba(128, 128, 128, 0.4)' as const;
export const BLEED_LINES_COLOR: CSSProperties['color'] = '#de007b' as const;

const theme: any = createMuiTheme({
  palette: {
    primary: {
      main: '#263147', // topBar left sidebar backgrounds
    },
    secondary: {
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
  typography: {
    fontFamily: 'Avenir',
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiInput: {
      underline: {
        borderBottomColor: 'white',
        '&:after': {
          borderBottom: '2px solid white',
        },
        '&:before': {
          borderBottom: '1px solid white',
        },
        '&:focus': {
          borderBottomColor: 'white',
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid white',
        },
      },
    },
    MuiSelect: {
      root: {
        borderBottom: '1px solid white',
        '&:after': {
          borderBottom: '1px solid white',
        },
        '&:focus': {
          borderBottom: '1px solid white',
        },
        '&:hover': {
          borderBottom: '1px solid white',
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'white',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': avenir,
      },
    },
  },
  mainPopup: {
    width: 350,
    backgroundColor: '#67707f',
  },
  leftDrawer: {
    width: 75,
  },
  mainBackground: {
    color: MAIN_BACKGROUND_COLOR,
  },
  color: {
    blue: BLUE_COLOR,
  },
} as ThemeOptions);

export default theme;
