import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';

//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/threeDemo' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        Three Demo
        </title>
      </Head>

      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 