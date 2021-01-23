import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';


//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/threeDemo3' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        3D Model
        </title>
      </Head>
      <Typography variant='h3'>GLTF 3D Model Example</Typography>
      <br/>
      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 