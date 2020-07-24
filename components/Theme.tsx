import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Theme set-up

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      success: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status: {
      success: React.CSSProperties['color']
    }
  }
}

const dark = createMuiTheme({
    status: {
      success: '#5FDFC7',
    },
    palette: {
      type: 'dark',  
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#E5E7E5',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#1A1B36',
      },
    },
  });

const light = createMuiTheme({
    status: {
      success: '#004D60',
    },
    palette: {
        type: 'light',
        primary: {
          main: '#1A1B36',
        },
        secondary: {
          main: '#6E6E6E',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
    },
});

export const darkTheme = { ...dark }
export const lightTheme = { ...light }
