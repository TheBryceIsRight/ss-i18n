import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/three4' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        Lorenz Attractor
        </title>
      </Head>
      <Typography variant='h3'>Lorenz Attractor Simulation</Typography>
      <br/>
      <Typography variant='subtitle1'>The Lorenz system is a system of ordinary differential equations first studied by Edward Lorenz and Ellen Fetter. It is notable for having chaotic solutions for certain parameter values and initial conditions. In particular, the Lorenz attractor is a set of chaotic solutions of the Lorenz system. <Link href="https://www.wikiwand.com/en/Lorenz_system">Read more on Wikipedia</Link> </Typography>
      <br/>
      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 