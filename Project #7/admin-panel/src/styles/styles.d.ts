import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { CSSProperties } from 'react';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    mainPopup: {
      width: number,
      backgroundColor: CSSProperties['color']
    }
    leftDrawer: {
      width: number,
    }
    mainBackground: {
      color: CSSProperties['color'],
    }
    color: {
      blue: CSSProperties['color'],
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    mainPopup?: {
      width?: number,
      backgroundColor?: CSSProperties['color']
    },
    leftDrawer?: {
      width?: number,
    }
    mainBackground: {
      color?: CSSProperties['color'],
    }
    color: {
      blue?: CSSProperties['color'],
    }
    // overrides: {
    //   MuiCssBaseline: any,
    // }
  }
}
