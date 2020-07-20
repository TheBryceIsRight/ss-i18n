import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Theme set-up

const dark = createMuiTheme({
    palette: {
      type: 'dark',  
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#19857b',
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
    palette: {
        type: 'light',
        primary: {
        main: '#1A1B36',
        },
        secondary: {
        main: '#19857b',
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
