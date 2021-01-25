import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';

//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/three5' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        Transparency
        </title>
      </Head>
      <Typography variant='h3'>Translucency Example</Typography>
      <br/>
      <Typography variant='subtitle1'>This example was created without three.js and uses a transparent SVG with GSAP for animation helpers. </Typography>
      <br/>
      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 