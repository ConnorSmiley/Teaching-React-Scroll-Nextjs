import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import {store} from "../redux/store"
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
