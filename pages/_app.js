import React from "react";
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react"
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Social Media Management App</title>
        <meta name="description" content="GarudaHacks 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </React.Fragment>
  )
}

export default MyApp
