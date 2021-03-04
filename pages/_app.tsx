/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react'

import { ApolloProvider } from '@apollo/client'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ProgressBar from 'nextjs-progressbar'

import { APP_TITLE } from 'common/i18n'
import theme from 'common/theme'
import Layout from 'components/Layout'
import { useApollo } from 'libs/apollo-client'

export const cache = createCache({ key: 'css', prepend: true })

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <ApolloProvider client={apolloClient}>
        <>
          <Head>
            <title>{APP_TITLE}</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ProgressBar
              color={theme.palette.secondary.main}
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </>
      </ApolloProvider>
    </CacheProvider>
  )
}

export default MyApp
