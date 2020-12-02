import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document";
import { defaultLocale } from '../translations/config';
import { mediaStyles } from "../utils/media";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={defaultLocale}>
        <Head>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MjgyMTFjMDctYTdlOS00MzkxLThkNzYtN2U1NWJiMmVjMDEyNjM3NDI0MzU2NzAwOTA3Nzgz" id="snipcart" data-config-modal-style="side" ></script>
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}