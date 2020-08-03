import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../components/Theme'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { MemoryRouter as Router } from 'react-router';
import '../styles/mapbox-gl.css';
import '../styles/global.css';
import Footer from '../components/footer';
import LocaleSwitcher from '../components/LocaleSwitcher';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Media, MediaContextProvider } from "../utils/media";


function MyApp({ Component, pageProps }: AppProps) {

  const containerSmall = {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerMedium = {
    maxWidth: '45rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerLarge = {
    maxWidth: '56rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerHuge = {
    maxWidth: '72rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const [isMounted, setIsMounted] = useState(false);
	const [darkState, setDarkState] = useState(true);

	const handleThemeChange = () => {
		setDarkState(!darkState);
	  };

  let theme = darkState ? darkTheme : lightTheme
  
  theme = responsiveFontSizes(theme)

	useEffect(() => {
	  setIsMounted(true)
  }, [])
  
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles === null || jssStyles.parentElement === null ) {
      console.log('oops, document is null');
    } else {
      jssStyles.parentElement.removeChild(jssStyles)!;
    }
  }, []);

  return (
  <MediaContextProvider>
  <Media at="sm">
  <div style={containerSmall} >
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar/>
        <Grid container direction='row' alignItems='center' spacing={2}>
            <Grid item>
            <Router>
            <FormControlLabel
                label='Dark mode' control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" color='secondary'/>}
                />
              </Router>
            </Grid>
            <Grid item>
              <LocaleSwitcher/>
            </Grid>
            </Grid>
        {isMounted && <Component {...pageProps} />}
        <br/>
        <Footer/>
    </ThemeProvider>
    </div>
    </Media>
    <Media at="md">
      <div style={containerMedium} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar/>
            <Grid container direction='row' alignItems='center' spacing={2}>
                <Grid item>
                <Router>
                <FormControlLabel
                    label='Dark mode' control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" color='secondary'/>}
                    />
                  </Router>
                </Grid>
                <Grid item>
                  <LocaleSwitcher/>
                </Grid>
                </Grid>
            {isMounted && <Component {...pageProps} />}
            <br/>
            <Footer/>
        </ThemeProvider>
      </div>
    </Media>
    <Media at="lg">
      <div style={containerLarge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar/>
            <Grid container direction='row' alignItems='center' spacing={2}>
                <Grid item>
                <Router>
                <FormControlLabel
                    label='Dark mode' control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" color='secondary'/>}
                    />
                  </Router>
                </Grid>
                <Grid item>
                  <LocaleSwitcher/>
                </Grid>
                </Grid>
            {isMounted && <Component {...pageProps} />}
            <br/>
            <Footer/>
        </ThemeProvider>
      </div>
    </Media>
    <Media greaterThan="lg">
      <div style={containerHuge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar/>
            <Grid container direction='row' alignItems='center' spacing={2}>
                <Grid item>
                <Router>
                <FormControlLabel
                    label='Dark mode' control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" color='secondary'/>}
                    />
                  </Router>
                </Grid>
                <Grid item>
                  <LocaleSwitcher/>
                </Grid>
                </Grid>
            {isMounted && <Component {...pageProps} />}
            <br/>
            <Footer/>
        </ThemeProvider>
      </div>
    </Media>
    </MediaContextProvider>  
    )

}

export default MyApp