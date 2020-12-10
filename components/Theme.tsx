import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Theme set-up
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    nuetral: Palette['primary'];
  }
  interface PaletteOptions {
    nuetral: PaletteOptions['primary'];
  }
}

const dark = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#6669A8',
      },
      error: {
        main: red.A400,
      },
      nuetral: {
        main: '#4DDF65',
      },
      background: {
        default: '#1A1B36',
        paper: '#101123',
      },
    
    },
  });

const light = createMuiTheme({
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
        nuetral: {
          main: '#025D25',
        },
        background: {
          default: '#F6F7FC',
          paper: '#EBEFF5',
        },
    },
});

export const darkTheme = { ...dark }
export const lightTheme = { ...light }
