import Head from 'next/head';
import React from 'react';
import withLocale from '../../hocs/withLocale';
import dynamic from 'next/dynamic';

//Random String Generator


function Three() {

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/threeDemo2' ), {
        ssr: false
      });

    return <React.Fragment>
      <Head>
        <title>
        Three Figma
        </title>
      </Head>

      <DynamicComponentWithNoSSR/>

      
    </React.Fragment> 
}


export default withLocale(Three) 