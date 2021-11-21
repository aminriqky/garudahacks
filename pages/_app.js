import React from "react";
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react"
import { Auth0Provider } from '@auth0/auth0-react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Nektar - Social Media Management App</title>
        <meta name="description" content="GarudaHacks 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <ChakraProvider>
    <Auth0Provider
        domain={'nektarapp.us.auth0.com'}
        clientId={'QLIB91ussJxRGrtueFUfpvVTwQNanYhU'}
        redirectUri={'https://nektarapp.herokuapp.com/'}>
      <Component {...pageProps} />
      </Auth0Provider>
    </ChakraProvider>
    </React.Fragment>
  )
}

export default MyApp
