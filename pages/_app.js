import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import Layout from '../components/Layout';
import { appWithTranslation } from '../i18n';
import GlobalFonts from '../components/Font';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const tarteaucitronScript = document.createElement('script');
    tarteaucitronScript.innerHTML = `
    tarteaucitron.init({
      "privacyUrl": "", /* Privacy policy url */

      "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
      "cookieName": "tarteaucitron", /* Cookie name */

      "orientation": "bottom", /* Banner position (top - bottom) */
      "showAlertSmall": true, /* Show the small banner on bottom right */
      "cookieslist": false, /* Show the cookie list */

      "adblocker": false, /* Show a Warning if an adblocker is detected */
      "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
      "highPrivacy": true, /* Disable auto consent */
      "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

      "removeCredit": false, /* Remove credit link */
      "moreInfoLink": true, /* Show more info link */
      "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */

      //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

      "readmoreLink": "/cookiespolicy", /* Change the default readmore link */
      });
    `;

    document.body.appendChild(tarteaucitronScript);

    const googleAnalytics = document.createElement('script');

    googleAnalytics.type = 'text/javascript';
    googleAnalytics.innerHTML = `
      tarteaucitron.user.analyticsUa = 'UA-155093185-1';
      tarteaucitron.user.analyticsMore = function () { /* add here your optionnal ga.push() */ };
      (tarteaucitron.job = tarteaucitron.job || []).push('analytics');
    `;

    document.body.appendChild(googleAnalytics);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <Head>
          <script type="text/javascript" src="/tarteaucitron/tarteaucitron.js"></script>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalFonts />
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default appWithTranslation(MyApp);