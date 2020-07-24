import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../components/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import App from '../components/App/App';
import { MemoryRouter as Router } from 'react-router';
import '../styles/mapbox-gl.css';
import '../styles/global.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {

  const container = {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  
};

  const [isMounted, setIsMounted] = useState(false);
	const [darkState, setDarkState] = useState(true);

	const handleThemeChange = () => {
		setDarkState(!darkState);
	  };

	const theme = darkState ? darkTheme : lightTheme

	useEffect(() => {
	  setIsMounted(true)
	}, [])

  return (
  <div style={container} >
    <ThemeProvider theme={theme}>
        <CssBaseline />
        
        
        <App/>
        <Grid container direction='row' alignItems='center' >
            <Grid item>
              
            <Router>
            <FormControlLabel
                label='Dark mode' control={<Switch checked={darkState} onChange={handleThemeChange} name="darkSwitchSideBar" color='secondary'/>}
                />
              </Router>
              
            </Grid>
            </Grid>
        {isMounted && <Component {...pageProps} />}
        <br/>
        <Footer/>
    </ThemeProvider>
    </div>)

}

export default MyApp