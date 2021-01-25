import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";

//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/threeDemo' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        Raytracing
        </title>
      </Head>
      <Typography variant='h3'>Raycasting Example</Typography>
      <br/>
      <Typography variant='subtitle1'>Ray casting is the methodological basis for 3-D CAD/CAM solid modeling and image rendering. It is essentially the same as ray tracing for computer graphics where virtual light rays are cast or traced on their path from the focal point of a camera through each pixel in the camera sensor to determine what is visible along the ray in the 3-D scene. <Link href="https://www.wikiwand.com/en/Ray_casting">Read more on Wikipedia</Link> </Typography>
      <br/>
      <Typography variant="subtitle1">Raycasting within three.js is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.</Typography>
      <br/>
      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 