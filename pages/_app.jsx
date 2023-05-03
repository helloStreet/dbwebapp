import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Layout from '../components/layout/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../src/utils/initFontAwesome';
import '../src/styles/globals.css';

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
