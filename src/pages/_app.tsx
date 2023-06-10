import Head from 'next/head';

import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@styles/themes/light-theme';
import UserApiContext from '@core/contexts/UserApiContext';

import '../styles/globals.css'
import USERS_API from '@core/api/users.api';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="./favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="./favicon-32x32.png" sizes="32x32" />
      </Head>
      <ThemeProvider theme={theme}>
        <UserApiContext.Provider value={USERS_API}>
          <CssBaseline />
          <Component {...pageProps} />
        </UserApiContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
